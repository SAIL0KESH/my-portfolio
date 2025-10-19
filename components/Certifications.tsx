// components/Certifications.tsx
export default function Certifications({ items }: { items: { name: string; issuer: string; link: string }[] }) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c, i) => (
          <a key={i} href={c.link} target="_blank" className="rounded-2xl glass p-4 hover:bg-white/5 transition">
            <div className="text-base font-semibold">{c.name}</div>
            <div className="text-sm text-white/70">{c.issuer}</div>
          </a>
        ))}
      </div>
    );
  }
  