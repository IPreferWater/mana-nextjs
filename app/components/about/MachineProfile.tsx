const specs = [
  { label: 'Vitesse', value: '1200 SPM' },
  { label: 'Resolution', value: '0.1mm' },
  { label: 'Uptime', value: '99.9%' },
];

export default function MachineProfile() {
  return (
    <aside className="space-y-stack-md">
      {/* Machine card */}
      <div className="relative max-w-xs mx-auto p-3 bg-surface-bright rotate-[-1.5deg] shadow-[2px_3px_6px_rgba(0,0,0,0.25)]">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-tertiary-container/70" />
        <div className="aspect-[4/3] bg-outline-variant mb-3 overflow-hidden border border-outline relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB018H8LffsY_K3Mwot03OBh8fIkSZvKYHTT1mrYYJIeFPEF50R1NMQX3sLl_NSqVIXWllT_oigEsWGwGr9W8cjbW0K_h9OYLPLg7-eVb0v2VmGJniOGhYQwaIh6tX_af1P0JKmGWGOXFFut5_ByzLGIg3vc1a71Tchx-BT5FVD8-T2gZeckxYUsisqsg6-T4URzS1NFFp86BWYzKbhYRaNJcZlsU_fsbeZAXVOpoqNCEpoDsVlgWGgolcFiwGQ-qk8Q8Ph4wclrk8"
            alt="The Machine"
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-label-sm bg-black/50 px-2 py-1 uppercase">Machine Unit 01</span>
          </div>
        </div>

        <div className="space-y-unit">
          <p className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-tight">
            Model: Purl-Core X
          </p>
          <p className="font-headline-md text-headline-md">The Machine</p>
        </div>

        {/* Specs */}
        <div className="mt-stack-md pt-stack-md border-t border-outline-variant space-y-stack-sm">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between font-label-sm text-[10px] uppercase text-on-secondary-container"
            >
              <span>{spec.label}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
