"use client";
import Reveal from "./Reveal";

type Skills = Record<string, string[]>;

export default function SkillGrid({ data }: { data: Skills }) {
  const groups = Object.entries(data);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map(([group, list], i) => (
        <Reveal key={group} delay={i * 0.05}>
          <div className="rounded-2xl glass p-5">
            <h3 className="font-semibold mb-3">{group.replaceAll("_", " & ")}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
