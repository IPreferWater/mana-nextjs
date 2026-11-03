'use client';

import { useEffect, useRef } from 'react';

interface SkillGaugeProps {
  label: string;
  value: number;
}

export default function SkillGauge({ label, value }: SkillGaugeProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.width = '0%';
    const t = setTimeout(() => {
      bar.style.width = `${value}%`;
    }, 300);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div className="space-y-1">
      <div className="flex justify-between font-label-sm text-[10px] uppercase">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-surface-variant border border-outline w-full">
        <div
          ref={barRef}
          className="h-full bg-primary transition-[width] duration-1000 ease-in-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
