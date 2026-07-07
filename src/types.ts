export type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  dateApplied: string; // ISO date (yyyy-mm-dd)
  status: ApplicationStatus;
}

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];
