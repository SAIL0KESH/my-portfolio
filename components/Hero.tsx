"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { socials } from "../lib/data";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-30, 30], [6, -6]);
  const rotY = useTransform(mx, [-30, 30], [-6, 6]);

  return (
    <section className="pt-28 relative overflow-hidden">
      {/* floating neon blobs */}
      <div className="bg-blob -top-20 -left-32" />
      <div className="bg-blob top-40 right-[-20%]" style={{ animationDelay: "1.2s" }} />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          onMouseMove={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            mx.set(((e.clientX - rect.left) / rect.width) * 60 - 30);
            my.set(((e.clientY - rect.top) / rect.height) * 60 - 30);
          }}
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
          className="rounded-3xl glass p-8 md:p-14"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Sai Lokesh Sanisetty
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/80 max-w-2xl">
            Full-Stack Engineer • Cloud-Native • AI-Integrated Web Systems
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 transition shimmer">
              Explore Projects
            </a>
            <ResumeButton className="shimmer" />
            <a href={socials.github} target="_blank" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5 transition">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5 transition">
              LinkedIn
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
