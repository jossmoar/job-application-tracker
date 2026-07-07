import type { ApplicationStatus, JobApplication } from "../types";
import { APPLICATION_STATUSES } from "../types";
import { StatusBadge } from "./StatusBadge";

interface ApplicationCardProps {
  application: JobApplication;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
  onRemove: (id: string) => void;
}

export function ApplicationCard({ application, onStatusChange, onRemove }: ApplicationCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div>
          <p className="font-display text-lg font-medium text-ink-primary">{application.company}</p>
          <p className="text-sm text-ink-secondary">{application.position}</p>
          <p className="mt-1 text-xs text-ink-muted">
            Aplicado el {new Date(application.dateApplied + "T00:00:00").toLocaleDateString("es-CR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <StatusBadge status={application.status} />
        <select
          value={application.status}
          onChange={(e) => onStatusChange(application.id, e.target.value as ApplicationStatus)}
          className="rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-xs text-ink-primary focus:outline-none focus:ring-2 focus:ring-status-applied/40"
        >
          {APPLICATION_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          onClick={() => onRemove(application.id)}
          aria-label={`Eliminar aplicación a ${application.company}`}
          className="rounded-lg px-2 py-1.5 text-xs text-ink-muted transition-colors hover:bg-status-rejected/10 hover:text-status-rejected"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
