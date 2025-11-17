// components/LokiAvatar.tsx
export default function LokiAvatar({ size = 56 }: { size?: number }) {
    const s = size;
    return (
      <div
        className="relative rounded-2xl bg-white/5 border border-white/10 shadow-lg"
        style={{ width: s, height: s }}
        aria-label="Loki avatar"
        title="Loki"
      >
        {/* neon ring */}
        <div className="absolute inset-0 rounded-2xl animate-pulse shadow-[0_0_24px_rgba(0,255,200,.35)]" />
        <svg viewBox="0 0 128 128" className="absolute inset-0">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#6fffe9" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {/* head */}
          <rect x="16" y="24" width="96" height="80" rx="18" fill="#0b0f14" stroke="url(#g)" strokeWidth="3" />
          {/* eyes */}
          <circle cx="48" cy="64" r="10" fill="#6fffe9" />
          <circle cx="80" cy="64" r="10" fill="#6fffe9" />
          {/* mouth equalizer */}
          <g stroke="#6fffe9" strokeWidth="3">
            <line x1="44" y1="88" x2="84" y2="88" />
            <line x1="52" y1="82" x2="52" y2="94" />
            <line x1="64" y1="78" x2="64" y2="98" />
            <line x1="76" y1="82" x2="76" y2="94" />
          </g>
          {/* antenna */}
          <path d="M64 24 L64 10" stroke="url(#g)" strokeWidth="3" />
          <circle cx="64" cy="8" r="4" fill="#6fffe9" />
        </svg>
      </div>
    );
  }
  