export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Example Project",
    description: "One line about what it does and why it matters.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/project-1.png",
    live: "https://example.com",
    repo: "https://github.com/your-username/example",
  },
];