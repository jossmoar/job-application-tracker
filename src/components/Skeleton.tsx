function Block({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-ink-primary/8 ${className}`} />;
}

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-2 mdx:gap-3 mdx:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-hairline bg-surface px-3 py-3 shadow-sm mdx:px-5 mdx:py-4">
          <Block className="h-3.5 w-14" />
          <Block className="mt-2 h-7 w-8" />
        </div>
      ))}
    </div>
  );
}

export function ApplicationListSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-4 shadow-sm mdx:flex-row mdx:items-center mdx:justify-between mdx:p-5"
        >
          <div className="flex flex-col gap-2">
            <Block className="h-4 w-32 mdx:w-40" />
            <Block className="h-3.5 w-24 mdx:w-28" />
            <Block className="h-3 w-20 mdx:w-24" />
          </div>
          <Block className="h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
