export interface ContactSubmission {
  name: string;
  phone: string;
  serviceArea: string;
  message: string;
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

/**
 * Submits the contact form two ways:
 *
 * 1. A form-encoded POST to "/" matching the static form Netlify's build
 *    crawler indexes (see NetlifyHiddenForm.tsx). When this site is
 *    actually deployed on Netlify, Netlify intercepts it and fires the
 *    email notifications configured in the site dashboard. Off Netlify —
 *    `next dev`, or any other host — this POST still returns 200 (it just
 *    re-serves the page, since there's no real form handler behind it), so
 *    its result can't be used to tell whether a submission was genuinely
 *    captured. It's fired best-effort and never blocks or fails the UI.
 * 2. A JSON POST to /api/contact, our own route handler. This is the
 *    source of truth for success/failure shown to the user, since it
 *    actually runs in every environment (local dev and once deployed).
 */
export async function submitContactForm(data: ContactSubmission) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      name: data.name,
      phone: data.phone,
      "service-area": data.serviceArea,
      message: data.message,
      "bot-field": "",
    }),
  }).catch(() => {});

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Request failed");
}
