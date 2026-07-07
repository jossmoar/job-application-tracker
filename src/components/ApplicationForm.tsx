import { useState, type FormEvent } from "react";
import type { ApplicationStatus, JobApplication } from "../types";
import { APPLICATION_STATUSES } from "../types";

interface ApplicationFormProps {
  onAdd: (input: Omit<JobApplication, "id">) => void;
}

const today = () => new Date().toISOString().slice(0, 10);

export function ApplicationForm({ onAdd }: ApplicationFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [dateApplied, setDateApplied] = useState(today);
  const [status, setStatus] = useState<ApplicationStatus>("Applied");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!company.trim() || !position.trim()) return;
    onAdd({ company: company.trim(), position: position.trim(), dateApplied, status });
    setCompany("");
    setPosition("");
    setDateApplied(today());
    setStatus("Applied");
  }

  const inputClasses =
    "rounded-xl border border-hairline bg-surface px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-status-applied/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 rounded-2xl border border-hairline bg-surface p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-5"
    >
      <input
        className={inputClasses}
        placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <input
        className={inputClasses}
        placeholder="Puesto"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <input
        type="date"
        className={inputClasses}
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
        required
      />
      <select
        className={inputClasses}
        value={status}
        onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
      >
        {APPLICATION_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-xl bg-ink-primary px-4 py-2.5 text-sm font-medium text-plane transition-opacity hover:opacity-90"
      >
        Agregar
      </button>
    </form>
  );
}
