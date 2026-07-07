import { useMemo, useState } from "react";
import { useApplications } from "./hooks/useApplications";
import type { ApplicationStatus } from "./types";
import { Dashboard } from "./components/Dashboard";
import { FilterBar } from "./components/FilterBar";
import { ApplicationForm } from "./components/ApplicationForm";
import { ApplicationList } from "./components/ApplicationList";
import { Modal } from "./components/Modal";

function App() {
  const { applications, addApplication, updateStatus, removeApplication } = useApplications();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "All">("All");
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-tight text-ink-primary">
              Job Application Tracker
            </h1>
            <p className="mt-1 text-sm text-ink-secondary">
              Seguimiento de postulaciones — organizado, claro, al día.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="shrink-0 rounded-xl bg-ink-primary px-4 py-2.5 text-sm font-medium text-plane transition-opacity hover:opacity-90"
          >
            + Agregar aplicación
          </button>
        </header>

        <Dashboard applications={applications} />

        {isFormOpen && (
          <Modal title="Nueva aplicación" onClose={() => setIsFormOpen(false)}>
            <ApplicationForm onAdd={addApplication} onSubmitted={() => setIsFormOpen(false)} />
          </Modal>
        )}

        <FilterBar
          query={query}
          onQueryChange={setQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <ApplicationList
          applications={filtered}
          onStatusChange={updateStatus}
          onRemove={removeApplication}
        />
      </div>
    </div>
  );
}

export default App;
