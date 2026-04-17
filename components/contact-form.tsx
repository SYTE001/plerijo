"use client";

import { FormEvent, useState } from "react";

type FormState = {
  email: string;
  message: string;
};

type Status = "idle" | "success" | "error";

const initialState: FormState = {
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setForm(initialState);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-accent dark:border-slate-700"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        {errors.email ? <p className="text-sm text-red-500">{errors.email}</p> : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-accent dark:border-slate-700"
          placeholder="Tell me about your project or role..."
          required
        />
        {errors.message ? <p className="text-sm text-red-500">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">Message sent successfully. I will get back to you soon.</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-500">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
