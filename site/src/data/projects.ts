export type Project = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "POS App",
    category: "Web Apps",
    summary:
      "Point-of-sale system with offline-friendly installer workflows, Windows services, and operational dashboards.",
    tags: ["Django", "Windows Services", "Installers", "Receipts"],
    liveUrl: "https://knaapps.net/pos/",
  },

  {
    title: "Station GIS App (Incident + Hydrant Mapping)",
    category: "GIS",
    summary:
      "Mapping and reporting workflows supporting operational awareness, planning, and incident analysis.",
    tags: ["QGIS", "Data Capture", "Reporting"],
    liveUrl: "https://knaapps.net/gis/",
  },

  {
    title: "Microsoft Access Reporting Systems",
    category: "Access",
    summary:
      "Custom Microsoft Access databases for structured data capture, reporting, and internal workflows.",
    tags: ["Access", "VBA", "Reporting"],
  },

  {
    title: "Excel Dashboards and Automation",
    category: "Excel",
    summary:
      "Automated Excel dashboards, data processing pipelines, and decision-support tools.",
    tags: ["Excel", "Power Query", "Automation"],
  },
];
