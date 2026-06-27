"use client";

interface SectionHeaderProps {
  number: string; // e.g., "01" or "02"
  category: string; // e.g., "Background" or "Featured Work"
  title: string; // e.g., "About Me"
  description: string; // The supporting subtext on the right
}

export default function SectionHeader({
  number,
  category,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-100 pb-8 mb-16 gap-4 select-none">
      <div className="space-y-2">
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 block">
          {number} / {category}
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-neutral-900 font-futura leading-none">
          {title}
        </h2>
      </div>
      <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}
