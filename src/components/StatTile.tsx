interface StatTileProps {
  label: string;
  value: number;
  accent?: string;
}

export function StatTile({ label, value, accent = "var(--color-ink-primary)" }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface px-5 py-4 shadow-sm">
      <p className="text-sm text-ink-secondary">{label}</p>
      <p className="mt-1 font-sans text-3xl font-semibold" style={{ color: accent }}>
        {value}
      </p>
    </div>
  );
}
