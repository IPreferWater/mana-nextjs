import SkillGauge from '@/components/about/SkillGauge';

interface ArtisanProfileProps {
  id: string;
  label: string;
  job: string;
  skills: Record<string, number>;
}

export default function ArtisanProfile({ id, label, job, skills }: ArtisanProfileProps) {
  return (
    <aside className="space-y-stack-md">
      {/* Profile card */}
      <div className="relative max-w-xs mx-auto p-3 bg-surface-bright rotate-[1.5deg] shadow-[2px_3px_6px_rgba(0,0,0,0.25)]">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-tertiary-container/70" />
        <div className="aspect-[4/3] bg-outline-variant mb-3 overflow-hidden border border-outline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBig_6Q2SdpbQO41sSimyiMgNZQPJ1GHujjCfJCya5dbWSoU6FWEB9usSb_yj2f9mKnUSGPEmgbLtu7Ny9q7VT7InrfEJwz1i8nGorxkgXDCPrTSOu9i9Q0euBhPMj1jSEwUf1FS85NQRM0vyo6PCzxW2KBWIF_R-mm0aQBqbWrsNJIdqy7DNB6r2agTBRkOHA1uy97JKO0UDDA7INMZJlo9vJf0VHMtvP5tuQwU4LXJX-VkNtvcae5TdO6AAOQK-FAYSGujyBjDUY"
            alt={label}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-unit">
          <p className="font-label-sm text-label-sm text-primary uppercase">ID: {id}</p>
          <p className="font-headline-md text-headline-md">{label}</p>
          <p className="font-body-md text-on-surface-variant">{job}</p>
        </div>

        {/* Skill gauges */}
        <div className="mt-stack-md pt-stack-md border-t border-outline-variant space-y-stack-sm">
          {Object.entries(skills).map(([name, value]) => (
            <SkillGauge key={name} label={name} value={value} />
          ))}
        </div>
      </div>
    </aside>
  );
}
