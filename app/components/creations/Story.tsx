'use client';

import { CrashTestImage } from '@/app/lib/creations';
import Carrousel from './Carrousel';
import { useState } from 'react';

interface CreationStoryProps {
  bodyHtml: string;
  colorPalette: string[];
  crashTestImages: CrashTestImage[];
}

export default function Story({ bodyHtml, colorPalette, crashTestImages }: CreationStoryProps) {
  const [crashTestIndex, setCrashTestIndex] = useState(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg mt-stack-lg">

      {/* Story */}
      <div className="md:col-span-2 bg-surface-container-low pixel-border p-stack-lg">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md uppercase border-b border-outline pb-2">
          {"Story for this creation"}
        </h3>
        <div
          className="prose prose-sm max-w-none text-on-surface-variant font-body-md leading-relaxed space-y-stack-md"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        {/* Color palette */}
        {colorPalette.length > 0 && (
          <div className="flex gap-4 mt-6">
            {colorPalette.map((hex) => (
              <div key={hex} className="flex flex-col items-center">
                <div className="w-12 h-12 pixel-border mb-1" style={{ backgroundColor: hex }} />
                <span className="text-[10px] font-label-sm">{hex.toUpperCase()}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Crash tests history */}
      <div className="bg-surface-container-highest pixel-border p-4 flex flex-col gap-stack-sm relative overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-surface-container-lowest text-primary font-label-sm text-[10px] border border-primary">
          Crash tests [ {crashTestIndex + 1} / {crashTestImages.length}]
        </div>
            <Carrousel 
              images={crashTestImages.map((img) => img.src)} 
              onActiveIndexChange={setCrashTestIndex}
            />
            <div className="p-2 border-t border-outline">
              <p className="font-label-sm text-[11px] text-on-surface-variant uppercase">
                {crashTestImages[crashTestIndex]?.alt || 'No description'}
              </p>
            </div>
      </div>
    </div>
  );
}
