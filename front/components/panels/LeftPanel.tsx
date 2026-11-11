import NovaChat from "@/components/panels/NovaChat";
import { site } from "@/data/site";

export default function LeftPanel() {
  return (
    <div className="flex h-full flex-col">
      {/* TOP: photo, bio, socials (design this freely) */}
      <section className="py-10 lg:flex-1">
        {/* Replace with <Image src="/images/me.jpg" ... /> when you have a photo */}
        <div className="size-32 rounded-full bg-neutral-800" />

        <h1 className="mt-6 text-3xl font-bold">{site.name}</h1>
        <p className="mt-1 text-neutral-400">{site.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-300">
          Your bio goes here.
        </p>

        <ul className="mt-6 flex gap-4 text-sm">
          {Object.entries(site.socials).map(([name, url]) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="capitalize text-neutral-300 hover:text-white"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM: Nova chat. One full screen tall on desktop */}
      <section className="h-[32rem] pb-10 lg:h-screen lg:py-6">
        <NovaChat />
      </section>
    </div>
  );
}