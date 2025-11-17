"use client";
import { useState, useRef } from "react";
import LokiAvatar from "./LokiAvatar";

type Msg = { role: "user" | "loki copilot 💬"; text: string };

export default function LokiChat() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "loki copilot 💬", text: "Hi, I’m loki copilot 💬. Ask me about Lokesh’s work, projects, or request recommendations." },
  ]);
  const [q, setQ] = useState(""); const busy = useRef(false);

  const ask = async () => {
    if (!q.trim() || busy.current) return;
    busy.current = true;
    const userMsg: Msg = { role: "user", text: q.trim() };
    setMsgs(m => [...m, userMsg]);
    setQ("");

    try {
      const r = await fetch("/api/loki", { method: "POST", body: JSON.stringify({ question: userMsg.text }) });
      const j = await r.json();
      setMsgs(m => [...m, { role: "loki copilot 💬", text: j.answer }]);
    } catch {
      setMsgs(m => [...m, { role: "loki copilot 💬", text: "I hit a snag. Try again." }]);
    } finally {
      busy.current = false;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 h-[56vh] overflow-y-auto">
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-3 mb-3 ${m.role === "user" ? "justify-end" : ""}`}>
            {m.role === "loki copilot 💬" && <LokiAvatar size={36} />}
            <div className={`max-w-[80%] rounded-xl px-3 py-2 leading-relaxed ${
              m.role === "user" ? "bg-primary/80 text-black" : "bg-black/40 border border-white/10"
            }`}>
              {m.text.split("\n").map((ln, idx) => <p key={idx}>{ln}</p>)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onKeyDown={e => e.key === "Enter" && ask()}
          placeholder="Ask loki copliot anything about Lokesh…"
          className="flex-1 rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none focus:border-primary"
        />
        <button onClick={ask} className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90">Ask</button>
      </div>
    </div>
  );
}
