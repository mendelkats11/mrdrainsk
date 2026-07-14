import { NextResponse } from "next/server";

// Runs alongside the Netlify Forms submission (see lib/netlify-forms.ts)
// on every request and is the source of truth for the success/failure
// state shown to the user, since — unlike the Netlify Forms POST — it
// actually works in every environment (local `next dev` included). On a
// real Netlify deployment, Netlify Forms *also* captures the submission
// separately and fires whatever email notifications are configured in
// the site dashboard. This route currently just logs; swap in a real
// email/CRM integration here if this path needs to send mail itself.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.serviceArea !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.phone.trim() ||
    !body.serviceArea.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  console.log("[contact] new quote request:", {
    name: body.name,
    phone: body.phone,
    serviceArea: body.serviceArea,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
