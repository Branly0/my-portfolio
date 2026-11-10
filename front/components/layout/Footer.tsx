import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name} . All rights reserved.</p>
        <div className="flex gap-6">
          <a href={site.socials.github} className="hover:text-white">GitHub</a>
          <a href={site.socials.linkedin} className="hover:text-white">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}