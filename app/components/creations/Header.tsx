interface CreationHeaderProps {
  title: string;
  projectNumber: string;
  lore: string;
  type: string;
  rarity: string;
}

export default function Header({ title, projectNumber, lore, type }: CreationHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-stack-md">
      <div>
        <span className="font-label-sm text-label-sm text-primary uppercase">
          Projet #{projectNumber} • {lore}
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface mt-stack-sm">
          {title}
        </h1>
      </div>
      <div className="flex gap-stack-sm">
        <div className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm pixel-border">
          TYPE: {type}
        </div>
      </div>
    </div>
  );
}
