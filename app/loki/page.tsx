// app/loki/page.tsx
import LokiChat from "@/components/LokiChat";

export const metadata = {
  title: "Loki Copilot 🤖 — Ask About Lokesh",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-3">
        Loki Copilot <span className="align-middle">🤖</span>
      </h1>
      <p className="text-white/70 mb-6 max-w-2xl">
        Loki Copilot 🤖 is my personal career chatbot. Ask about my skills,
        experience, projects, tech stack, or get suggestions on what I should
        build next.
      </p>
      <LokiChat />
    </main>
  );
}
