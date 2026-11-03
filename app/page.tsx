import Image from 'next/image';
import Link from 'next/link';
import { getAllCreations } from './lib/creations';

export const metadata = {
  title: 'Gallery',
};

export default async function CreationsIndexPage() {
  const creations = await getAllCreations();

  return (
    <div className="max-w-[1440px] mx-auto p-gutter lg:py-stack-lg flex flex-col gap-stack-lg">

      {/* Page header */}
      <div className="border-b-2 border-outline pb-stack-md">
        <p className="font-body-md text-on-surface-variant mt-stack-sm">
          {creations.length} creations
        </p>
      </div>

      {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-stack-md">
          {creations.map((creation) => (
            <Link
              key={creation.slug}
              href={`/creations/${creation.slug}`}
              className="pixel-border bg-surface-container-lowest p-stack-md pixel-card-hover flex flex-col gap-stack-sm group block"
            >
              {/* Image or placeholder */}
              <div className="aspect-square bg-surface-container pixel-border flex items-center justify-center relative overflow-hidden">
                {creation.images.length > 0 ? (
                  <Image
                    src={creation.images[0]}
                    alt={creation.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundImage: 'radial-gradient(#6f7979 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }}
                    />
                    <div className="flex flex-col items-center gap-2 text-outline z-10">
                      <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>grid_on</span>
                      <span className="font-label-sm text-[10px] uppercase">{creation.type}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-unit">
                <div className="flex gap-stack-sm flex-wrap">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-[10px]">
                    {creation.type}
                  </span>
                </div>

                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {creation.title}
                </h2>

                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  #{creation.projectNumber} • {creation.lore}
                </p>

                {/* Color palette preview */}
                {creation.colorPalette.length > 0 && (
                  <div className="flex gap-1 mt-unit">
                    {creation.colorPalette.map((hex) => (
                      <div
                        key={hex}
                        className="w-4 h-4 pixel-border"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      
    </div>
  );
}
