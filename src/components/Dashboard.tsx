import { useTranslation } from "react-i18next";
import type { JobApplication } from "../types";
import { StatTile } from "./StatTile";

export function Dashboard({ applications }: { applications: JobApplication[] }) {
  const { t } = useTranslation();

  const counts = {
    total: applications.length,
    Applied: applications.filter((a) => a.status === "Applied").length,
    Interview: applications.filter((a) => a.status === "Interview").length,
    Offer: applications.filter((a) => a.status === "Offer").length,
    Rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <StatTile label={t("dashboard.total")} value={counts.total} />
      <StatTile label={t("status.Applied")} value={counts.Applied} accent="var(--color-status-applied)" />
      <StatTile label={t("status.Interview")} value={counts.Interview} accent="var(--color-status-interview)" />
      <StatTile label={t("status.Offer")} value={counts.Offer} accent="var(--color-status-offer)" />
      <StatTile label={t("status.Rejected")} value={counts.Rejected} accent="var(--color-status-rejected)" />
    </div>
  );
}
