function Block({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-ink-primary/8 ${className}`} />;
}

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-hairline bg-surface px-5 py-4 shadow-sm">
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
          className="flex items-center justify-between gap-3 rounded-2xl border border-hairline bg-surface p-5 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <Block className="h-4 w-40" />
            <Block className="h-3.5 w-28" />
            <Block className="h-3 w-24" />
          </div>
          <Block className="h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
