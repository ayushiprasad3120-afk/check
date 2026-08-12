import { NextResponse } from "next/server";
import { leadFormSchema, callBackFormSchema } from "@/lib/validation/schemas";

/**
 * Accepts both full quote-form submissions and call-back-form
 * submissions (a subset of fields) — validated server-side with the
 * same Zod schemas used on the client, since client-side validation
 * alone is never trusted for a public endpoint.
 * In production this would forward the lead to a CRM or agent-routing
 * service; here it validates and echoes an acknowledgment.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const asLead = leadFormSchema.safeParse(body);
  if (asLead.success) {
    return NextResponse.json({ ok: true, kind: "lead" }, { status: 200 });
  }

  const asCallBack = callBackFormSchema.safeParse(body);
  if (asCallBack.success) {
    return NextResponse.json({ ok: true, kind: "call-back" }, { status: 200 });
  }

  return NextResponse.json(
    { error: "Validation failed", details: asLead.error.flatten() },
    { status: 422 }
  );
}
