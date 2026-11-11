import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Experience</h2>
      <ol className="mt-6 space-y-6 border-l border-neutral-800 pl-6">
        {experience.map((e) => (
          <li key={`${e.org}-${e.role}`}>
            <p className="text-xs text-neutral-500">{e.period}</p>
            <h3 className="font-semibold">{e.role} · {e.org}</h3>
            <p className="mt-1 text-sm text-neutral-400">{e.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}