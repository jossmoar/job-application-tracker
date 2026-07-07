import type { JobApplication } from "../types";
import { StatTile } from "./StatTile";

export function Dashboard({ applications }: { applications: JobApplication[] }) {
  const counts = {
    total: applications.length,
    Applied: applications.filter((a) => a.status === "Applied").length,
    Interview: applications.filter((a) => a.status === "Interview").length,
    Offer: applications.filter((a) => a.status === "Offer").length,
    Rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <StatTile label="Total" value={counts.total} />
      <StatTile label="Applied" value={counts.Applied} accent="var(--color-status-applied)" />
      <StatTile label="Interview" value={counts.Interview} accent="var(--color-status-interview)" />
      <StatTile label="Offer" value={counts.Offer} accent="var(--color-status-offer)" />
      <StatTile label="Rejected" value={counts.Rejected} accent="var(--color-status-rejected)" />
    </div>
  );
}
