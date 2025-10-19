// components/GitHubStats.tsx
import { headers } from "next/headers";

export default async function GitHubStats() {
  // Build absolute base URL (works locally + on Vercel/any proxy)
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const protoHdr = h.get("x-forwarded-proto") ?? "http";
  const protocol = protoHdr.split(",")[0]; // handle "https,http"
  const base = `${protocol}://${host}`;

  const res = await fetch(`${base}/api/github`, { cache: "no-store" });
  if (!res.ok) {
    return (
      <div className="glass rounded-2xl p-4">
        <div className="font-semibold">GitHub</div>
        <div className="text-white/70 text-sm">Couldn’t load stats right now.</div>
      </div>
    );
  }
  const data = await res.json();

  return (
    <div className="grid gap-4">
      <div className="glass rounded-2xl p-4">
        <div className="font-semibold">GitHub</div>
        <div className="text-white/80 text-sm">
          Followers: {data.user.followers} • Public Repos: {data.user.public_repos}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {data.repos.map((r: any) => (
          <a key={r.name} href={r.url} target="_blank" className="glass rounded-2xl p-4 hover:bg-white/5 transition">
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-white/70">{r.desc ?? "—"}</div>
            <div className="text-xs text-white/60 mt-1">★ {r.stars} {r.lang ? `• ${r.lang}` : ""}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
