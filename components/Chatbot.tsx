"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "Hi! Ask me about Lokesh’s experience, skills, AWS, projects, or anything from the résumé." },
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [msgs, open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: text }) });
    const data = await res.json();
    const reply = data?.answer ?? "Sorry, I couldn't find that.";
    setMsgs((m) => [...m, { role: "assistant", text: reply }]);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-primary text-white shadow-lg hover:opacity-90 transition"
      >
        {open ? "Close" : "loki copilot 💬"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96 rounded-2xl glass overflow-hidden">
          <div className="p-3 border-b border-white/10 font-semibold">AI Résumé Chat</div>
          <div ref={boxRef} className="h-64 overflow-y-auto p-3 space-y-2">
            {msgs.map((m, i) => (
              <div key={i} className={`${m.role === "user" ? "text-right" : ""}`}>
                <div className={`inline-block px-3 py-2 rounded-xl ${m.role === "user" ? "bg-white/10" : "bg-white/5"} border border-white/10`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2 border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about BNY Mellon, AWS, etc."
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none"
            />
            <button onClick={send} className="px-3 py-2 rounded-xl bg-primary hover:bg-primary/90">Send</button>
          </div>
        </div>
      )}
    </>
  );
}
