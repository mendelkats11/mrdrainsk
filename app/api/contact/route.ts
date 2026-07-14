import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_ADDRESSES = ["mendelkats10@gmail.com", "info@mrdrainsk.com"];

// mrdrainsk.com is verified in Resend, so send from the real domain
// instead of the shared onboarding@resend.dev sandbox address.
const FROM_ADDRESS = "Mr. Drain Plumber <quotes@mrdrainsk.com>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.serviceArea !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.phone.trim() ||
    !body.serviceArea.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: TO_ADDRESSES,
        reply_to: body.email,
        subject: `New quote request from ${body.name} (${body.serviceArea})`,
        text: [
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone}`,
          `Service area: ${body.serviceArea}`,
          "",
          "Message:",
          body.message,
        ].join("\n"),
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      console.error("[contact] Resend send failed:", res.status, errorBody);
      return NextResponse.json(
        { ok: false, error: "Failed to send." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const timedOut = err instanceof DOMException && err.name === "AbortError";
    console.error("[contact] Resend request error:", timedOut ? "timeout" : err);
    return NextResponse.json(
      { ok: false, error: timedOut ? "Request timed out." : "Failed to send." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
