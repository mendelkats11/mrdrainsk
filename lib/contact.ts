export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  message: string;
}

// Must stay longer than the server route's own Resend timeout (45s — see
// app/api/contact/route.ts), which itself waits for genuine confirmation
// before responding. If this fired first, the client would give up on a
// request our server was still legitimately waiting to confirm.
const TIMEOUT_MS = 50000;

/**
 * Posts to our own /api/contact route, which sends the email server-side
 * via Resend (see app/api/contact/route.ts) — the API key has to stay off
 * the client, so this can't call Resend directly the way the previous
 * FormSubmit.co integration called that service directly.
 */
export async function submitContactForm(data: ContactSubmission) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) throw new Error("Request failed");
}
