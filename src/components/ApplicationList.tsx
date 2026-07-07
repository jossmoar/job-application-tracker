import type { ApplicationStatus, JobApplication } from "../types";
import { ApplicationCard } from "./ApplicationCard";

interface ApplicationListProps {
  applications: JobApplication[];
  onStatusChange: (id: string, status: ApplicationStatus) => void;
  onRemove: (id: string) => void;
}

export function ApplicationList({ applications, onStatusChange, onRemove }: ApplicationListProps) {
  if (applications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-hairline p-10 text-center text-sm text-ink-muted">
        No hay aplicaciones que coincidan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onStatusChange={onStatusChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
