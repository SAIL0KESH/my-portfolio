// app/page.tsx
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SkillGrid from "../components/SkillGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectCard from "../components/ProjectCard";
import Certifications from "../components/Certifications";
import GitHubStats from "../components/GitHubStats";
import Chatbot from "../components/Chatbot";
import Visitors from "../components/Visitors";

import { skills, experience, projects, certifications, socials } from "../lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <Section id="about" title="About">
        <p>
          I build intelligent, cloud-native web systems. My focus is shipping resilient microservices (Spring Boot / FastAPI),
          modern React/Next.js experiences, and data automation on AWS with great DX (CI/CD, observability).
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <SkillGrid data={skills as any} />
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline items={experience} />
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </Section>

      <Section id="github" title="GitHub Highlights">
        {/* server component */}
        {/* Remember NEXT_PUBLIC_BASE_URL in .env.local for local dev */}
        {/* GITHUB_USERNAME env also recommended */}
        {/* @ts-expect-error Server Component */}
        <GitHubStats />
      </Section>

      <Section id="certs" title="Certifications">
        <Certifications items={certifications} />
      </Section>

      <Section id="contact" title="Contact">
        <div className="flex flex-wrap gap-3">
          <a className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90" href={`mailto:${socials.email}`}>Email Me</a>
          <a className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5" href={socials.linkedin} target="_blank">Message on LinkedIn</a>
        </div>
        <p className="mt-3 text-white/70">
          GitHub: <a className="underline" target="_blank" href={socials.github}>Profile</a>
        </p>
      </Section>

      <footer className="mx-auto max-w-6xl px-4 my-12 text-sm text-white/60 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Sai Lokesh Sanisetty</span>
        {/* @ts-expect-error Server Component */}
        <Visitors />
      </footer>

      {/* floating chat */}
      <Chatbot />
    </>
  );
}
