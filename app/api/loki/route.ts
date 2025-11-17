// app/api/loki/route.ts
import { NextResponse } from "next/server";
import { answer, LOKI_NAME } from "@/lib/loki";

export async function POST(req: Request) {
  const { question } = await req.json().catch(() => ({ question: "" }));
  const { text } = answer(question ?? "");
  return NextResponse.json({ name: LOKI_NAME, answer: text });
}
