"use client";
import Image from "next/image";
import type { Project } from "../lib/data";
import { useRef } from "react";

export default function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -8}deg`);
    el.style.setProperty("--ry", `${px * 10}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={ref}
      className="group tilt glass overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {p.preview && (
        <div className="relative aspect-video overflow-hidden">
          <Image src={p.preview} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <div className="p-5 tilt-inner">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-1 text-white/80 text-sm">{p.blurb}</p>
        {p.highlights && (
          <ul className="mt-2 text-sm text-white/90 list-disc pl-5 space-y-1">
            {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a className="px-3 py-1 rounded-lg bg-primary/80 hover:bg-primary transition" href={p.github} target="_blank">GitHub</a>
          {p.demo && <a className="px-3 py-1 rounded-lg border border-white/20 hover:bg-white/5 transition" href={p.demo} target="_blank">Live Demo</a>}
        </div>
      </div>
    </div>
  );
}
