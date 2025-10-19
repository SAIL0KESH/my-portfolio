"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<{ok?: boolean; sent?: boolean; error?: string}>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(body) });
    const data = await res.json();
    setState(data);
    if (data.ok) (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <input name="name" placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
      <input name="email" placeholder="Your email" className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
      <textarea name="message" placeholder="Your message" rows={5} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
      <button className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90">Send</button>
      {state.ok && <div className="text-sm text-white/70">{state.sent ? "Message sent to inbox ✔" : "Received (dev mode) ✔"}</div>}
      {state.error && <div className="text-sm text-red-300">{state.error}</div>}
    </form>
  );
}
