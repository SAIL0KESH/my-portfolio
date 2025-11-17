"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { socials } from "../lib/data";
import LokiAvatar from "./LokiAvatar";
import ResumeButton from "./ResumeButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between glass rounded-b-2xl">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <LokiAvatar size={24} />
          <span className="font-semibold tracking-tight">Sai Lokesh Sanisetty</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop actions (NO Ask Loki here) */}
        <div className="hidden md:flex items-center gap-3">
          <a href={socials.github} target="_blank" className="px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/5">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" className="px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/5">
            LinkedIn
          </a>
          <ResumeButton className="shimmer" />
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden px-3 py-1.5 rounded-lg border border-white/20"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-4 mt-2">
          <ul className="glass rounded-2xl p-3 text-sm">
            {links.map((l) => (
              <li key={l.href} className="py-2 border-b border-white/10 last:border-none">
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li className="flex flex-wrap gap-3 pt-3">
              {/* NO Ask Loki here */}
              <a href={socials.github} target="_blank" className="px-3 py-1.5 rounded-lg border border-white/20">GitHub</a>
              <a href={socials.linkedin} target="_blank" className="px-3 py-1.5 rounded-lg border border-white/20">LinkedIn</a>
              <a href="/resume.pdf" className="px-3 py-1.5 rounded-lg bg-primary/80">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
