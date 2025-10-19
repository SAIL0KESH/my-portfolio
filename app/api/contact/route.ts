// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  // If SMTP env exists, send email via nodemailer
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "you@example.com",
      subject: `Message from ${parsed.data.name}`,
      text: `${parsed.data.message}\n\nFrom: ${parsed.data.name} <${parsed.data.email}>`,
    });
    return NextResponse.json({ ok: true, sent: true });
  }

  // Dev mode: just echo ok (no email sent)
  return NextResponse.json({ ok: true, sent: false });
}
