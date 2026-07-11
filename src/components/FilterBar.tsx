import { useTranslation } from "react-i18next";
import type { ApplicationStatus } from "../types";
import { APPLICATION_STATUSES } from "../types";

interface FilterBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  statusFilter: ApplicationStatus | "All";
  onStatusFilterChange: (value: ApplicationStatus | "All") => void;
}

export function FilterBar({
  query,
  onQueryChange,
  statusFilter,
  onStatusFilterChange,
}: FilterBarProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 mdx:flex-row mdx:items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={t("filter.searchPlaceholder")}
        className="w-full rounded-xl border border-hairline bg-surface px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-status-applied/40 mdx:max-w-sm"
      />
      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value as ApplicationStatus | "All")}
        className="w-full rounded-xl border border-hairline bg-surface px-4 py-2.5 text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-status-applied/40 mdx:w-auto"
      >
        <option value="All">{t("filter.allStatuses")}</option>
        {APPLICATION_STATUSES.map((status) => (
          <option key={status} value={status}>
            {t(`status.${status}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
