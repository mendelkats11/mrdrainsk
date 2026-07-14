export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  message: string;
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/mendelkats10@gmail.com";
const CC_ADDRESS = "info@mrdrainsk.com";

/**
 * Sends the contact form straight to FormSubmit.co — no backend of our
 * own required, so this works identically on localhost, Netlify, or any
 * other host. The first submission to a given target address triggers a
 * one-time confirmation email from FormSubmit that must be clicked before
 * that address actually receives mail; see FormSubmit's dashboard for
 * activation status.
 */
export async function submitContactForm(data: ContactSubmission) {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceArea: data.serviceArea,
      message: data.message,
      _subject: `New quote request from ${data.name} (${data.serviceArea})`,
      _cc: CC_ADDRESS,
      _template: "table",
      _captcha: "false",
    }),
  });
  if (!res.ok) throw new Error("Request failed");

  // FormSubmit returns HTTP 200 even when the submission didn't actually
  // go through (e.g. the target address still needs one-time activation),
  // signalling failure only via this JSON body — so res.ok alone isn't
  // enough to know the email was sent.
  const body: { success?: string | boolean } = await res.json().catch(() => ({}));
  if (body.success !== true && body.success !== "true") {
    throw new Error("Request failed");
  }
}
