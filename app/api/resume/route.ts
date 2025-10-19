// app/api/resume/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Always serve the local file in /public for now.
  return NextResponse.json({ url: "/Sai_Lokesh_Sanisetty_Resume.pdf", presigned: false });
}
