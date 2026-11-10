"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="text-lg font-bold">
          {site.name}
        </Link>

        {/* Desktop links */}
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-neutral-800 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-neutral-300">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}