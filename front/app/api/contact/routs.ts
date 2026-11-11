import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { message } = await req.json();

  if (typeof message !== "string" || message.trim().length < 5 || message.length > 2000) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    subject: "New portfolio message",
    text: message,
  });

  if (error) {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}