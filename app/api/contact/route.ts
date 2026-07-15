import { NextResponse } from "next/server";

/**
 * Sends contact-form submissions via Resend (https://resend.com). This
 * route is plain Next.js — no platform-specific APIs, adapters, or
 * plugins of any kind. It runs the same way on any host capable of
 * running a Next.js server (Vercel, a Node server, etc.); it does not
 * assume Netlify or anything Netlify-specific.
 *
 * REQUIRED: the RESEND_API_KEY environment variable must be set on
 * whichever platform actually runs this in production. It's read from
 * .env.local for local dev, but that file is gitignored on purpose and
 * never reaches the deployed server — every hosting platform requires
 * secrets to be entered separately in its own dashboard/config.
 *
 * RESPONSE TIMING: this waits for Resend's actual response and only
 * returns ok:true once Resend has genuinely confirmed the send — the
 * client should never see "success" for something that wasn't actually
 * sent. The timeout below exists purely as a safety net against a truly
 * dead connection, not as an impatience cutoff — it's set generously
 * long specifically so it doesn't fire while a request is still
 * legitimately in flight (that was the earlier bug: a too-short timeout
 * aborted requests that would have succeeded if given a few more
 * seconds, which produced a false "something went wrong" on emails that
 * had, in reality, already gone out).
 */

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_ADDRESSES = ["mendelkats10@gmail.com", "info@mrdrainsk.com"];

// mrdrainsk.com is verified in Resend, so mail sends from the real
// domain rather than the shared onboarding@resend.dev sandbox address.
const FROM_ADDRESS = "Mr. Drain Plumber <quotes@mrdrainsk.com>";

const RESEND_TIMEOUT_MS = 45000;

interface ContactRequestBody {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  message: string;
  source?: string;
}

function isValidBody(body: unknown): body is ContactRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.serviceArea === "string" &&
    b.serviceArea.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  const rawBody = await request.json().catch(() => null);

  if (!isValidBody(rawBody)) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set in this environment — add it in your hosting platform's environment variable settings."
    );
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const source = rawBody.source?.trim() || "Unknown page";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const resendRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: TO_ADDRESSES,
        reply_to: rawBody.email,
        subject: `[${source}] New quote request from ${rawBody.name} (${rawBody.serviceArea})`,
        text: [
          `Submitted from: ${source}`,
          `Name: ${rawBody.name}`,
          `Email: ${rawBody.email}`,
          `Phone: ${rawBody.phone}`,
          `Service area: ${rawBody.serviceArea}`,
          "",
          "Message:",
          rawBody.message,
        ].join("\n"),
      }),
      signal: controller.signal,
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text().catch(() => "");
      console.error("[contact] Resend rejected the request:", resendRes.status, errorText);
      return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 502 });
    }

    console.log("[contact] Resend confirmed the send.");
    return NextResponse.json({ ok: true });
  } catch (err) {
    const timedOut = err instanceof DOMException && err.name === "AbortError";
    console.error("[contact] Request to Resend failed:", timedOut ? "timed out" : err);
    return NextResponse.json(
      { ok: false, error: timedOut ? "Request timed out." : "Failed to send." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
