interface StatTileProps {
  label: string;
  value: number;
  accent?: string;
}

export function StatTile({ label, value, accent = "var(--color-ink-primary)" }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface px-3 py-3 shadow-sm mdx:px-5 mdx:py-4">
      <p className="text-xs text-ink-secondary mdx:text-sm">{label}</p>
      <p className="mt-1 font-sans text-2xl font-semibold mdx:text-3xl" style={{ color: accent }}>
        {value}
      </p>
    </div>
  );
}
