import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              Live demo
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-neutral-300 hover:underline">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}