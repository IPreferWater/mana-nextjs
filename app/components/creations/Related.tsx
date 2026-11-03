import Link from 'next/link';
import Image from 'next/image';
import { CreationCard } from '@/app/lib/creations';

interface CreationRelatedProps {
  related: CreationCard[];
}

export default function Related({ related }: CreationRelatedProps) {
  if (related.length === 0) return null;

  return (
    <div className="mt-stack-lg border-t-2 border-outline-variant pt-stack-lg">
      <h4 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">
        SAME LORE
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/creations/${item.slug}`}
            className="pixel-border bg-surface-container-lowest p-2 pixel-card-hover cursor-pointer block"
          >
            <div className="aspect-square bg-surface-container mb-2 overflow-hidden relative">
              {item.images[0] ? (
                <Image src={item.images[0]} alt={item.title} fill className="object-cover" sizes="25vw" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-1 text-outline">
                  <span className="material-symbols-outlined">grid_on</span>
                  <span className="font-label-sm text-[10px] uppercase">{item.type}</span>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <span className="font-label-sm text-xs uppercase">{item.title}</span>
              <span className="font-label-sm text-sm">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
