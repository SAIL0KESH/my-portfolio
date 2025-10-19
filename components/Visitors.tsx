// components/Visitors.tsx
export default async function Visitors() {
    // Build absolute URL for server component
    const base = process.env.NEXT_PUBLIC_BASE_ABS || "http://localhost:3000";
    const res = await fetch(`${base}/api/visitors`, { cache: "no-store" }).catch(() => null);
    const data = await res?.json().catch(() => ({ count: 0 })) ?? { count: 0 };
    return (
      <div className="text-xs text-white/60">
        Visitors: <span className="font-mono">{data.count}</span>
      </div>
    );
  }
  