import NovaChat from "@/components/panels/NovaChat";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Link as LinkIcon } from "lucide-react";
import Copyright from "@/components/ui/Copyright";

// const icons = { github: FaGithub, linkedin: FaLinkedin, email: Mail };
import { site } from "@/data/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
};

export default function LeftPanel() {
  return (
    <div className="flex h-full flex-col gap-10">
      {/* TOP: photo, bio, socials (design this freely) */}
      <section className="relative py-10 lg:flex-1 border border-neutral-700 p-6 lg:pt-20 pb-20 lg:pb-0 pt-5 mt-10">
        {/* Replace with <Image src="/images/me.jpg" ... /> when you have a photo */}
        <Copyright />
        <div className="mt-5 lg:mt-16 size-32 rounded-full bg-neutral-800" />

        <h1 className="mt-6 text-3xl font-bold">{site.name}</h1>
        <p className="mt-6 text-neutral-400">{site.description}</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-300">
          {site.bio}
        </p>

        <ul className="absolute bottom-6 right-6 mt-6 flex flex-wrap gap-4 text-sm">
        {Object.entries(site.socials).map(([name, url]) => {
          const Icon = icons[name] ?? LinkIcon;
          return (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white"
              >
                <Icon className="size-5" />
                <span className="capitalize">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      </section>

      {/* BOTTOM: Nova chat. One full screen tall on desktop */}
      <section className="h-[70dvh] min-h-[24rem] pb-6 lg:h-screen lg:py-6">
        <NovaChat />
      </section>
    </div>
  );
}