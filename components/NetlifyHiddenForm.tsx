/**
 * Static, non-interactive form that exists purely so Netlify's build-time
 * crawler can discover the "contact" form (Netlify Forms only detects
 * forms present in the built HTML, not ones assembled client-side by
 * React). The real, interactive form lives in ContactForm.tsx and submits
 * to this same form name via a plain fetch POST — see submitContactForm
 * in lib/netlify-forms.ts.
 */
export function NetlifyHiddenForm() {
  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="name" />
      <input type="tel" name="phone" />
      <input type="text" name="service-area" />
      <textarea name="message" />
      <input type="text" name="bot-field" />
    </form>
  );
}
