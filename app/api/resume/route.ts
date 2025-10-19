// app/api/resume/route.ts
import { NextResponse } from "next/server";

// If S3 env vars exist, generate a presigned URL; else fallback to /resume.pdf
export async function GET() {
  const hasS3 = !!(process.env.AWS_REGION && process.env.S3_BUCKET && process.env.S3_KEY && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY);
  if (!hasS3) {
    return NextResponse.json({ url: "/api/Sai_Lokesh_Sanisetty_Resume.pdf", presigned: false });
  }

  // Lazy import AWS SDK v3 to avoid bundling if unused
  const { S3Client, GetObjectCommand } = await import("@aws-sdk/client-s3");
  const { getSignedUrl } = await import("@aws-sdk/s3-request-presigner");

  const s3 = new S3Client({ region: process.env.AWS_REGION });
  const cmd = new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: process.env.S3_KEY });
  const url = await getSignedUrl(s3, cmd, { expiresIn: 60 }); // 60s
  return NextResponse.json({ url, presigned: true });
}
