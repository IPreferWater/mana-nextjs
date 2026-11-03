import { CreationStats } from '@/app/lib/creations';

interface CreationSheetProps {
  stats: CreationStats;
  quote: string;
  nbrOfColors: number;
}

export default function Sheet({ stats, quote, nbrOfColors }: CreationSheetProps) {
  return (
    <div className="bg-surface-bright pixel-border p-stack-lg flex flex-col h-full shadow-[4px_4px_0px_0px_rgba(68,100,100,1)]">
      <div className="stitch-line pb-stack-sm mb-stack-md flex justify-between items-center">
        <span className="font-headline-md text-headline-md text-tertiary">Technical details</span>
      </div>

      <div className="flex flex-col gap-stack-md flex-grow">
        <div className="flex justify-between items-center border-b border-outline-variant py-2">
          <span className="font-label-sm text-label-sm uppercase">Number of points</span>
          <span className="font-body-md font-bold text-primary">{stats.totalPoints}</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant py-2">
          <span className="font-label-sm text-label-sm uppercase">Thread used</span>
          <span className="font-body-md font-bold text-primary">{stats.threadsUsed}</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant py-2">
          <span className="font-label-sm text-label-sm uppercase">Number of colors</span>
          <span className="font-body-md font-bold text-primary">{nbrOfColors}</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant py-2">
          <span className="font-label-sm text-label-sm uppercase">Number of shapes</span>
          <span className="font-body-md font-bold text-primary">{stats.nbrOfShapes}</span>
        </div>
        <div className="flex justify-between items-center border-b border-outline-variant py-2">
          <span className="font-label-sm text-label-sm uppercase">File size</span>
          <span className="font-body-md font-bold text-primary">{stats.fileSize}</span>
        </div>

        {quote && (
          <div className="mt-stack-lg p-stack-md bg-secondary-container pixel-border">
            <p className="font-label-sm text-label-sm italic text-on-secondary-container">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-stack-lg pt-stack-lg border-t border-outline flex flex-col gap-stack-sm">
        <a
          href="mailto:clementinestla@gmail.com"
          className="block w-full text-center bg-primary text-on-primary py-4 pixel-border font-headline-md text-headline-md hover:bg-on-primary-fixed-variant transition-all hover:-translate-y-0.5 active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,50,52,1)]"
        >
          Contact for embroidery
        </a>
      </div>
    </div>
  );
}
