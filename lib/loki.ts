// lib/loki.ts
import { projects, socials, certifications } from "./data";

export const LOKI_NAME = "loki copilot 💬";

const profile = {
  name: "Sai Lokesh Sanisetty",
  title: "Software Development Engineer",
  location: "Hammond, IN, USA",
  email: socials.email,
  linkedin: socials.linkedin,
  github: socials.github,
  summary:
    "Full-stack engineer working across Spring Boot, FastAPI, React/Next.js, and AWS to build cloud-native products.",
};

const norm = (s: string) => s.toLowerCase().trim();
const has = (text: string, keys: string | string[]) =>
  (Array.isArray(keys) ? keys : [keys]).some((k) =>
    norm(text).includes(norm(k))
  );

export function answer(rawQuestion: string): { text: string } {
  const q = norm(rawQuestion || "");

  if (!q) {
    return {
      text:
        "I’m Loki Copilot 🤖 — Lokesh’s personal career chatbot. Ask about his skills, experience, projects, certifications, or what he should build next.",
    };
  }

  // Basic identity
  if (has(q, ["who is lokesh", "who are you", "name"])) {
    return {
      text: `${profile.name} — ${profile.title}, based in ${profile.location}. He works with Java/Spring Boot, Python (FastAPI/Django), React/Next.js, and AWS.`,
    };
  }

  // Contact
  if (has(q, ["email", "contact", "reach you"])) {
    return {
      text: `You can contact Lokesh at ${profile.email} or on LinkedIn: ${profile.linkedin}`,
    };
  }

  // GitHub + repos
  if (has(q, ["github", "repos", "repository"])) {
    const lines = projects
      .slice(0, 5)
      .map(
        (p) => `• ${p.title}${p.github ? ` — ${p.github}` : ""}`
      );
    return {
      text:
        `Lokesh’s GitHub profile: ${profile.github}\n\nHighlighted repos:\n` +
        lines.join("\n"),
    };
  }

  // Experience / summary
  if (has(q, ["experience", "background", "what does he do"])) {
    return {
      text:
        `${profile.summary}\n\nHe has around 5 years of experience across finance, manufacturing, and enterprise systems, building APIs, dashboards, and automation pipelines.`,
    };
  }

  // Projects
  if (has(q, ["project", "projects", "portfolio"])) {
    const lines = projects.slice(0, 6).map(
      (p) =>
        `• ${p.title} — ${p.blurb}${
          p.github ? `  [GitHub](${p.github})` : ""
        }`
    );
    return {
      text:
        "Here are some of Lokesh’s projects:\n" + lines.join("\n"),
    };
  }

  // Certifications
  if (has(q, ["cert", "certificate", "certification", "course"])) {
    const lines = certifications.map(
      (c) => `• ${c.name} — ${c.issuer}`
    );
    return {
      text: "Certifications:\n" + lines.join("\n"),
    };
  }

  // Recommendations / ideas
  if (has(q, ["recommend", "what should i build", "idea", "ideas"])) {
    const ideas = projects.slice(0, 4).map(
      (p) => `• ${p.title} — ${p.blurb}`
    );
    return {
      text:
        "Here are some project ideas based on what Lokesh already builds:\n" +
        ideas.join("\n") +
        "\n\nYou can ask me to go deeper into any of these projects or stacks.",
    };
  }

  // Default
  return {
    text:
      "Good question. I’m Loki Copilot 🤖 — I can answer about Lokesh’s background, stack, projects, and certifications, or suggest project ideas. Try something like “summarize his experience”, “show projects”, or “recommend a cloud project”.",
  };
}
