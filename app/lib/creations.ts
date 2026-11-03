import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CREATIONS_DIR = path.join(process.cwd(), 'content', 'creations');

export interface CreationStats {
  totalPoints: string;
  threadsUsed: string;
  nbrOfShapes: number;
  fileSize: string;
}

const IMAGES_DIR = path.join(process.cwd(), 'public', 'creations');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export interface CrashTestImage {
  src: string;
  alt: string;
}

export interface Creation {
  slug: string;
  title: string;
  projectNumber: string;
  lore: string;
  type: string;
  rarity: string;
  stats: CreationStats;
  quote: string;
  colorPalette: string[];
  relatedSlugs: string[];
  images: string[];
  crashTestImages: CrashTestImage[];
  bodyHtml: string;
}

export type CreationCard = Omit<Creation, 'bodyHtml'>;

export async function getAllCreations(): Promise<CreationCard[]> {
  const filenames = fs.readdirSync(CREATIONS_DIR).filter((f) => f.endsWith('.md'));

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(CREATIONS_DIR, filename), 'utf8');
    const { data } = matter(raw);

    const imagesFolder = path.join(IMAGES_DIR, slug);
    const images = fs.existsSync(imagesFolder)
      ? fs
          .readdirSync(imagesFolder)
          .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
          .sort()
          .map((f) => `/creations/${slug}/${f}`)
      : [];

    const crashTestsFolder = path.join(IMAGES_DIR, slug, 'crashTests');
    const crashTestImages: CrashTestImage[] = fs.existsSync(crashTestsFolder)
      ? fs
          .readdirSync(crashTestsFolder)
          .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
          .sort()
          .map((f, index) => ({
            src: `/creations/${slug}/crashTests/${f}`,
            alt: (data.crashTestsImages?.[index] ?? f),
          }))
      : [];

    return {
      slug,
      title: data.title ?? '',
      projectNumber: data.projectNumber ?? '',
      lore: data.lore ?? '',
      type: data.type ?? '',
      rarity: data.rarity ?? '',
      stats: data.stats ?? { totalPoints: '', threadsUsed: '', buildTime: '', crafterLevel: '', progress: 0 },
      quote: data.quote ?? '',
      colorPalette: data.colorPalette ?? [],
      relatedSlugs: data.relatedSlugs ?? [],
      images,
      crashTestImages,
    };
  });
}

export async function getCreationBySlug(slug: string): Promise<Creation | null> {
  const filepath = path.join(CREATIONS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    return null;
  }

  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const bodyHtml = processed.toString();

  const imagesFolder = path.join(IMAGES_DIR, slug);
  const images = fs.existsSync(imagesFolder)
    ? fs
        .readdirSync(imagesFolder)
        .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
        .sort()
        .map((f) => `/creations/${slug}/${f}`)
    : [];

  const crashTestsFolder = path.join(IMAGES_DIR, slug, 'crashTests');
  const crashTestImages: CrashTestImage[] = fs.existsSync(crashTestsFolder)
    ? fs
        .readdirSync(crashTestsFolder)
        .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
        .sort()
        .map((f, index) => ({
          src: `/creations/${slug}/crashTests/${f}`,
          alt: (data.crashTestsImages?.[index] ?? f),
        }))
    : [];

  return {
    slug,
    title: data.title ?? '',
    projectNumber: data.projectNumber ?? '',
    lore: data.lore ?? '',
    type: data.type ?? '',
    rarity: data.rarity ?? '',
    stats: data.stats ?? { totalPoints: '', threadsUsed: '', buildTime: '', crafterLevel: '', progress: 0 },
    quote: data.quote ?? '',
    colorPalette: data.colorPalette ?? [],
    relatedSlugs: data.relatedSlugs ?? [],
    images,
    crashTestImages,
    bodyHtml,
  };
}
