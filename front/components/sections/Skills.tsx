import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s} className="rounded-full bg-neutral-800 px-4 py-1.5 text-sm text-neutral-200">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}