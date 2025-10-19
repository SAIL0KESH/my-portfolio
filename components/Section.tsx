import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 mt-16 relative">
      <Reveal>
        <div className="card">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {title}
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          <div className="mt-6">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
