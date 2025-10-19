"use client";
import type { ExperienceItem } from "../lib/data";
import Reveal from "./Reveal";

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative border-l border-white/10">
      {items.map((exp, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/60 ring-2 ring-primary/30" />
            <h3 className="text-lg font-semibold">
              {exp.title} — <span className="text-white/80">{exp.company}</span>
            </h3>
            <div className="text-sm text-white/60">{exp.location} • {exp.period}</div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-white/90">
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
