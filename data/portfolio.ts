export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "AWS",
  "CI/CD",
  "Testing",
  "Accessibility",
];

export const projects: Project[] = [
  {
    title: "CommercePulse",
    description:
      "An analytics dashboard for e-commerce teams with real-time sales, retention, and campaign performance insights.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com/commercepulse",
    githubUrl: "https://github.com/example/commercepulse",
  },
  {
    title: "FocusFlow",
    description:
      "A productivity platform that combines time blocking, habits, and lightweight task management in one interface.",
    tech: ["React", "Tailwind CSS", "Node.js", "Redis"],
    liveUrl: "https://example.com/focusflow",
    githubUrl: "https://github.com/example/focusflow",
  },
  {
    title: "DocuSync",
    description:
      "A collaborative document workspace with role-based permissions, comments, and fast full-text search.",
    tech: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    liveUrl: "https://example.com/docusync",
    githubUrl: "https://github.com/example/docusync",
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Northline Labs",
    duration: "2023 — Present",
    description:
      "Led delivery of a design system and performance-focused migration to Next.js, improving Lighthouse scores and development velocity.",
  },
  {
    role: "Full-Stack Developer",
    company: "Crestwave Digital",
    duration: "2020 — 2023",
    description:
      "Built internal and customer-facing applications across product, analytics, and billing workflows.",
  },
  {
    role: "Software Engineer",
    company: "Blue Harbor Tech",
    duration: "2018 — 2020",
    description:
      "Developed API integrations, accessibility improvements, and reusable front-end modules for enterprise clients.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/example" },
  { label: "LinkedIn", href: "https://linkedin.com/in/example" },
  { label: "X", href: "https://x.com/example" },
];
