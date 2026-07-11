import { useTranslation } from "react-i18next";
import type { ApplicationStatus, JobApplication } from "../types";
import { APPLICATION_STATUSES } from "../types";
import { StatusBadge } from "./StatusBadge";

interface ApplicationCardProps {
  application: JobApplication;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
  onRemove: (id: string) => void;
}

export function ApplicationCard({ application, onStatusChange, onRemove }: ApplicationCardProps) {
  const { t, i18n } = useTranslation();

  const formattedDate = new Date(application.dateApplied + "T00:00:00").toLocaleDateString(
    i18n.language === "en" ? "en-US" : "es-CR",
    { year: "numeric", month: "short", day: "numeric" },
  );

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-4 shadow-sm mdx:flex-row mdx:items-center mdx:justify-between mdx:p-5">
      <div className="flex items-center gap-3">
        <div>
          <p className="font-display text-lg font-medium text-ink-primary">{application.company}</p>
          <p className="text-sm text-ink-secondary">{application.position}</p>
          <p className="mt-1 text-xs text-ink-muted">
            {t(`dateVerb.${application.status}`)} {formattedDate}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mdx:flex-nowrap mdx:gap-3">
        <StatusBadge status={application.status} />
        <select
          value={application.status}
          onChange={(e) => onStatusChange(application.id, e.target.value as ApplicationStatus)}
          className="rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-xs text-ink-primary focus:outline-none focus:ring-2 focus:ring-status-applied/40"
        >
          {APPLICATION_STATUSES.map((s) => (
            <option key={s} value={s}>
              {t(`status.${s}`)}
            </option>
          ))}
        </select>
        <button
          onClick={() => onRemove(application.id)}
          aria-label={t("list.deleteAriaLabel", { company: application.company })}
          className="rounded-lg px-2 py-1.5 text-xs text-ink-muted transition-colors hover:bg-status-rejected/10 hover:text-status-rejected"
        >
          {t("list.delete")}
        </button>
      </div>
    </div>
  );
}
