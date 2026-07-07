import type { JobApplication } from "../types";

// Real applications provided by the user. Dates with only month/year in the
// source data default to day 1 of that month — adjust manually if needed.
export const sampleApplications: JobApplication[] = [
  { id: "sample-1", company: "Cornerstone Building Brands", position: "Azure Application Developer", dateApplied: "2026-06-25", status: "Applied" },
  { id: "sample-2", company: "Walmart", position: "Software Engineer I (AI & Full-Stack)", dateApplied: "2026-06-19", status: "Applied" },
  { id: "sample-3", company: "TransUnion", position: "Software Developer", dateApplied: "2026-06-11", status: "Applied" },
  { id: "sample-4", company: "Terumo", position: "Software Engineer I R&D", dateApplied: "2026-06-11", status: "Applied" },
  { id: "sample-5", company: "Konrad Group", position: "Java Full Stack Developer", dateApplied: "2026-06-10", status: "Applied" },
  { id: "sample-6", company: "GreenSlate", position: "Software Engineer", dateApplied: "2026-07-04", status: "Applied" },
  { id: "sample-7", company: "GreenSlate", position: "QA Engineer", dateApplied: "2026-06-11", status: "Applied" },
  { id: "sample-8", company: "Simera", position: "Fullstack Developer", dateApplied: "2026-06-20", status: "Applied" },
  { id: "sample-9", company: "Simera", position: "Backend Developer", dateApplied: "2026-06-20", status: "Applied" },
  { id: "sample-10", company: "BC Tecnología", position: "Desarrollador Full-Stack Jr", dateApplied: "2026-07-03", status: "Applied" },
  { id: "sample-11", company: "Excel SoftSources", position: ".NET Developer", dateApplied: "2026-07-04", status: "Applied" },
  { id: "sample-12", company: "Talent Sam", position: "Full Stack Developer", dateApplied: "2026-07-04", status: "Applied" },
  { id: "sample-13", company: "Moody's", position: "Associate Software Engineer", dateApplied: "2026-06-10", status: "Applied" },
  { id: "sample-14", company: "Factor IT", position: "Backend Developer (Node.js)", dateApplied: "2026-05-01", status: "Applied" },
  { id: "sample-15", company: "Factor IT", position: "Frontend Developer (Angular)", dateApplied: "2026-05-01", status: "Applied" },
  { id: "sample-16", company: "Perform", position: "Full Stack Developer (Python)", dateApplied: "2026-06-01", status: "Applied" },
  { id: "sample-17", company: "Datacor", position: "Software Engineer (Mobile)", dateApplied: "2026-06-01", status: "Applied" },
  { id: "sample-18", company: "IBM Consulting", position: "Full Stack Developer", dateApplied: "2026-06-01", status: "Applied" },
  { id: "sample-19", company: "Critical Mass", position: "Backend Developer", dateApplied: "2026-05-01", status: "Applied" },
  { id: "sample-20", company: "Teamswell", position: "Front-End Engineer (React)", dateApplied: "2026-05-01", status: "Applied" },
];
