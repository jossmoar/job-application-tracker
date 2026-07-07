import { useEffect, useState } from "react";
import type { JobApplication, ApplicationStatus } from "../types";
import { sampleApplications } from "../data/sampleApplications";

const STORAGE_KEY = "job-application-tracker:applications";

function loadInitial(): JobApplication[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return sampleApplications;
  try {
    return JSON.parse(raw) as JobApplication[];
  } catch {
    return sampleApplications;
  }
}

export function useApplications() {
  const [applications, setApplications] = useState<JobApplication[]>(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  function addApplication(input: Omit<JobApplication, "id">) {
    const newApplication: JobApplication = { ...input, id: crypto.randomUUID() };
    setApplications((prev) => [newApplication, ...prev]);
  }

  function updateStatus(id: string, status: ApplicationStatus) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app)),
    );
  }

  function removeApplication(id: string) {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  }

  return { applications, addApplication, updateStatus, removeApplication };
}
