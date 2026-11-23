export type ProjectSection = { title: string; items: string[] };
export type Project = {
 slug: string; title: string; category: string; summary: string; contribution: string;
 context: string; accent: string; preview: string; areas: string[];
 technologies?: string[]; sections?: ProjectSection[]; website?: string;
 screenshot?: { src: string; width: number; height: number; alt: string; caption?: string };
 gallery?: { src: string; width: number; height: number; alt: string; caption: string }[];
 evidenceNote?: string; organization?: string; contextTitle?: string; pdf?: string; relatedSlugs?: string[]; workflow?: { label: string; steps: string[] };
};


