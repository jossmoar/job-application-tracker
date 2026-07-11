import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useApplications } from "../hooks/useApplications";
import type { ApplicationStatus } from "../types";
import { Dashboard } from "../components/Dashboard";
import { FilterBar } from "../components/FilterBar";
import { ApplicationForm } from "../components/ApplicationForm";
import { ApplicationList } from "../components/ApplicationList";
import { Modal } from "../components/Modal";
import { DashboardSkeleton, ApplicationListSkeleton } from "../components/Skeleton";

// Client-only data (localStorage) resolves synchronously — this delay exists
// purely so the skeleton is visible instead of a jarring instant swap.
const SKELETON_DELAY_MS = 500;

export function TrackerPage() {
  const { t } = useTranslation();
  const { applications, addApplication, updateStatus, removeApplication } = useApplications();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "All">("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), SKELETON_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return applications.filter((app) => {
      const matchesQuery =
        !q || app.company.toLowerCase().includes(q) || app.position.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "All" || app.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [applications, query, statusFilter]);

  return (
    <div className="min-h-screen bg-plane">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 mdx:gap-8 mdx:px-6 mdx:py-12">
        <header
          data-aos="fade-up"
          className="flex flex-col items-start gap-4 mdx:flex-row mdx:justify-between"
        >
          <div>
            <h1 className="font-display text-2xl font-medium tracking-tight text-ink-primary mdx:text-4xl">
              {t("app.title")}
            </h1>
            <p className="mt-1 text-sm text-ink-secondary">{t("app.subtitle")}</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full shrink-0 rounded-xl bg-ink-primary px-4 py-2.5 text-sm font-medium text-plane transition-opacity hover:opacity-90 mdx:w-auto"
          >
            {t("app.addButton")}
          </button>
        </header>

        <div data-aos="fade-up" data-aos-delay="80">
          {isLoading ? <DashboardSkeleton /> : <Dashboard applications={applications} />}
        </div>

        {isFormOpen && (
          <Modal title={t("form.modalTitle")} onClose={() => setIsFormOpen(false)}>
            {(requestClose) => (
              <ApplicationForm onAdd={addApplication} onSubmitted={requestClose} />
            )}
          </Modal>
        )}

        <div data-aos="fade-up" data-aos-delay="140">
          <FilterBar
            query={query}
            onQueryChange={setQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          {isLoading ? (
            <ApplicationListSkeleton />
          ) : (
            <ApplicationList
              applications={filtered}
              onStatusChange={updateStatus}
              onRemove={removeApplication}
            />
          )}
        </div>
      </div>
    </div>
  );
}
