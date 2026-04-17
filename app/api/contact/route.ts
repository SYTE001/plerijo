import { NextResponse } from "next/server";

type ContactPayload = {
  email: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json({ error: "Message is too short." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Message received." }, { status: 200 });
}
