"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.value === "number") setCount(d.value);
      })
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <div className="text-xs text-white/50">
      {count.toLocaleString()} visits tracked by Loki Copilot 🤖
    </div>
  );
}
