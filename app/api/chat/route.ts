// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { qaCorpus } from "../../../lib/qa";
import { z } from "zod";

const schema = z.object({ message: z.string().min(1) });

function score(q: string, doc: string) {
  // simple token overlap score
  const a = new Set(q.toLowerCase().split(/\W+/).filter(Boolean));
  const b = new Set(doc.toLowerCase().split(/\W+/).filter(Boolean));
  let hit = 0;
  a.forEach((t) => { if (b.has(t)) hit++; });
  return hit / Math.max(1, a.size);
}

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Bad input" }, { status: 400 });

  const q = parsed.data.message;
  const best = qaCorpus
    .map((c) => ({ c, s: score(q, c.text) }))
    .sort((x, y) => y.s - x.s)[0];

  const answer = best && best.s > 0 ? best.c.text : 
    "I can talk about Spring Boot/FastAPI, React/Next.js, AWS/EKS, Airflow/dbt, and my roles at BNY Mellon, ACL Digital, Adani, and Purdue. Try asking about any of these.";

  return NextResponse.json({ answer, source: best?.c.tag ?? "general" });
}

/* OPTIONAL: If you want OpenAI answers instead, uncomment + add OPENAI_API_KEY
import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
... call client.chat.completions.create with a system prompt that includes qaCorpus ...
*/
