export type ProjectCategory = "Excel" | "Access" | "GIS" | "Web Apps";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl: string;
};

export const projects: Project[] = [
  {
    slug: "accessablepos",
    title: "AccessAblePOS (Offline + Web Services)",
    category: "Web Apps",
    summary: "POS system with offline-friendly installer workflows, services, and operational dashboards.",
    tags: ["Django", "Windows Services", "Installers", "Receipts"],
    liveUrl: "https://pos.knaapps.net",
    caseStudyUrl: "/work?cat=Web%20Apps#accessablepos"
  },
  {
    slug: "slfs-gis-app",
    title: "Station GIS App (Incident + Hydrant Mapping)",
    category: "GIS",
    summary: "Mapping and reporting workflows supporting operational awareness and planning.",
    tags: ["QGIS", "Data Capture", "Reporting"],
    liveUrl: "https://gis.knaapps.net",
    caseStudyUrl: "/work?cat=GIS#slfs-gis-app"
  },
  {
    slug: "access-reports",
    title: "Microsoft Access Reporting Systems",
    category: "Access",
    summary: "Operational data capture, query/report design, integrity constraints, and automation via VBA.",
    tags: ["Access", "VBA", "Reports", "Data Integrity"],
    caseStudyUrl: "/work?cat=Access#access-reports"
  },
  {
    slug: "excel-dashboards",
    title: "Excel Dashboards and Automation",
    category: "Excel",
    summary: "Dashboards, cleaning pipelines, and business reporting workflows optimized for real-world use.",
    tags: ["Excel", "Power Query", "Dashboards"],
    caseStudyUrl: "/work?cat=Excel#excel-dashboards"
  }
];
