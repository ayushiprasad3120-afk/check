import { NextResponse } from "next/server";
import { contactFormSchema, generalInquiryFormSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const asContact = contactFormSchema.safeParse(body);
  if (asContact.success) {
    return NextResponse.json({ ok: true, kind: "contact" }, { status: 200 });
  }

  const asInquiry = generalInquiryFormSchema.safeParse(body);
  if (asInquiry.success) {
    return NextResponse.json({ ok: true, kind: "general-inquiry" }, { status: 200 });
  }

  return NextResponse.json(
    { error: "Validation failed", details: asContact.error.flatten() },
    { status: 422 }
  );
}
