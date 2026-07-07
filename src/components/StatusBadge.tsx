import type { ApplicationStatus } from "../types";

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  Applied: "bg-status-applied/10 text-status-applied ring-status-applied/25",
  Interview: "bg-status-interview/10 text-status-interview ring-status-interview/30",
  Offer: "bg-status-offer/10 text-status-offer ring-status-offer/25",
  Rejected: "bg-status-rejected/10 text-status-rejected ring-status-rejected/25",
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
