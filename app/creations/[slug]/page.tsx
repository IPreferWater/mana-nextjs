import { notFound } from 'next/navigation';
import { getAllCreations, getCreationBySlug } from '@/app/lib/creations';
import Sheet from '@/components/creations/Sheet';
import Story from '@/components/creations/Story';
import Related from '@/components/creations/Related';
import Carrousel from '@/components/creations/Carrousel';
import Header from '@/components/creations/Header';

export async function generateStaticParams() {
  const creations = await getAllCreations();
  return creations.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creation = await getCreationBySlug(slug);
  if (!creation) return {};
  return { title: `${creation.title} — Pixel & Purl Atelier` };
}

export default async function CreationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creation = await getCreationBySlug(slug);

  if (!creation) {
    notFound();
  }

  const allCreations = await getAllCreations();
  const related = allCreations.filter((c) => creation.relatedSlugs.includes(c.slug));

  return (
    <div className="max-w-[1440px] mx-auto p-gutter lg:py-stack-lg flex flex-col gap-stack-lg">

      <Header
        title={creation.title}
        projectNumber={creation.projectNumber}
        lore={creation.lore}
        type={creation.type}
        rarity={creation.rarity}
      />

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">

        <Carrousel images={creation.images} />

        {/* Right: Quest sheet */}
        <div className="lg:col-span-4">
          <Sheet stats={creation.stats} quote={creation.quote} nbrOfColors={creation.colorPalette.length} />
        </div>
      </div>

      {/* Story & texture section */}
      <Story 
        bodyHtml={creation.bodyHtml} 
        colorPalette={creation.colorPalette}
        crashTestImages={creation.crashTestImages}
      />

      {/* Related creations */}
      <Related related={related} />
    </div>
  );
}
