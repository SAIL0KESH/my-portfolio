// app/api/views/route.ts
import { NextResponse } from "next/server";

const NAMESPACE = "lokesh-portfolio";
const KEY = "page-views";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json({ value: 0 }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ value: data.value ?? 0 });
  } catch {
    return NextResponse.json({ value: 0 }, { status: 200 });
  }
}
