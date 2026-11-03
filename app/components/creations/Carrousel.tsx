'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CarrouselProps {
  images: string[];
  onActiveIndexChange?: (index: number) => void;
}

export default function Carrousel({ images, onActiveIndexChange }: CarrouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    onActiveIndexChange?.(newIndex);
  };

  if (images.length === 0) {
    return (
      <div className="lg:col-span-8 flex flex-col gap-stack-md">
        <div className="relative aspect-square md:aspect-[4/3] bg-surface-container pixel-border flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#6f7979 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }}
          />
          <div className="relative w-4/5 h-4/5 rounded-full border-[12px] border-[#8d6e63] shadow-inner flex items-center justify-center bg-surface-container-low">
            <div className="flex flex-col items-center gap-stack-sm text-outline">
              <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>grid_on</span>
              <span className="font-label-sm text-label-sm uppercase">Visual coming soon</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 flex flex-col gap-stack-md">
      {/* Main image */}
      <div
        className="relative aspect-square md:aspect-[4/3] bg-surface-container pixel-border overflow-hidden cursor-pointer"
        onClick={() => handleIndexChange((activeIndex + 1) % images.length)}
      >
        <Image
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        {/* Action buttons */}
        <div className="absolute bottom-gutter right-gutter flex gap-stack-sm">
          <button
            className="w-10 h-10 bg-surface-container-lowest pixel-border flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:translate-y-0.5"
            onClick={() => handleIndexChange((activeIndex - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="w-10 h-10 bg-surface-container-lowest pixel-border flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:translate-y-0.5"
            onClick={() => handleIndexChange((activeIndex + 1) % images.length)}
            aria-label="Next image"
          >
            →
          </button>
        </div>
        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-gutter left-gutter font-label-sm text-label-sm text-outline">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-stack-sm overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => handleIndexChange(i)}
              className={`relative flex-shrink-0 w-16 h-16 pixel-border overflow-hidden transition-all ${
                i === activeIndex ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
