"use client";
import { useState } from "react";

export default function ResumeButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  const download = async () => {
    try {
      setLoading(true);
      const r = await fetch("/api/resume", { cache: "no-store" });
      const { url } = await r.json();
      window.location.href = url || "/resume.pdf";
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={download} disabled={loading}
      className={`px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 transition ${className}`}>
      {loading ? "Preparing…" : "Download Résumé"}
    </button>
  );
}
