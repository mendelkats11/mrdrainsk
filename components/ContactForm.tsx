"use client";

import { useState, type FormEvent } from "react";
import { serviceAreas } from "@/lib/service-areas";
import { CheckCircleIcon } from "@/components/icons/UiIcons";
import { submitContactForm } from "@/lib/contact";

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceArea: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ source = "Contact Page" }: { source?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[\d()+\-.\s]{7,}$/.test(values.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.serviceArea) next.serviceArea = "Please select your service area.";
    if (!values.message.trim()) next.message = "Tell us a bit about the problem.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactForm({ ...form, source });
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-success/40 bg-success/10 p-10 text-center">
        <CheckCircleIcon className="h-10 w-10 text-success" />
        <h2 className="font-display text-2xl font-semibold text-text">
          Got it — thanks!
        </h2>
        <p className="max-w-sm text-text-muted">
          Your request is in. We typically respond the same business day —
          if this is urgent, call us directly instead of waiting on a
          callback.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 cursor-pointer text-sm font-semibold text-brass hover:text-brass-dim"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 lg:py-1.5 text-text placeholder:text-text-muted/60"
          placeholder="Jamie Reyes"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 lg:py-1.5 text-text placeholder:text-text-muted/60"
          placeholder="jamie@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 lg:py-1.5 font-mono text-text placeholder:text-text-muted/60"
          placeholder="(306) 555-0142"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceArea" className="block text-sm font-medium text-text">
          Service Area
        </label>
        <select
          id="serviceArea"
          value={form.serviceArea}
          onChange={(e) => setForm((f) => ({ ...f, serviceArea: e.target.value }))}
          aria-invalid={Boolean(errors.serviceArea)}
          aria-describedby={errors.serviceArea ? "area-error" : undefined}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 lg:py-1.5 text-text"
        >
          <option value="">Select your community&hellip;</option>
          {serviceAreas.map((area) => (
            <option key={area.slug} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
        {errors.serviceArea && (
          <p id="area-error" className="mt-1 text-sm text-red-400">
            {errors.serviceArea}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={2}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 lg:py-1.5 text-text placeholder:text-text-muted/60"
          placeholder="What's going on, and when did it start?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your request. Please try again, or
          call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 cursor-pointer rounded-lg bg-brass px-6 py-3 lg:py-2 text-sm font-semibold text-bg transition-colors hover:bg-brass-dim disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Get My Free Quote!"}
      </button>
    </form>
  );
}
