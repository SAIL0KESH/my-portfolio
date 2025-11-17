// app/api/loki/route.ts
import { NextResponse } from "next/server";
import { answer, LOKI_NAME } from "@/lib/loki";

export async function POST(req: Request) {
    const body = await req.json().catch(() => ({}));
    const question = body.question ?? "";
    const { text } = answer(question);
    return NextResponse.json({ name: LOKI_NAME, answer: text });
  }
