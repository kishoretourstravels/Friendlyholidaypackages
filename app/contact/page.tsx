"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  destination: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  destination: "",
  message: "",
};

function isValidPhone(phone: string) {
  // simple India-friendly check (10 digits allowed, with optional +91/space)
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 12;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    phone: false,
    destination: false,
    message: false,
  });

  const phoneTo = "917799727979";

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!isValidPhone(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.destination.trim()) e.destination = "Destination is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function markTouched<K extends keyof FormState>(key: K) {
    setTouched((p) => ({ ...p, [key]: true }));
  }

  function submitWhatsApp() {
    // mark all touched
    setTouched({ name: true, phone: true, destination: true, message: true });
    if (!canSubmit) return;

    const text = encodeURIComponent(
      [
        "Hi Friends Holiday Packages,",
        "",
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Destination: ${form.destination}`,
        `Message: ${form.message}`,
      ].join("\n")
    );

    const href = `https://wa.me/${phoneTo}?text=${text}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="bg-[color:var(--brand-cream)]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">Contact Us</h1>
        <p className="mt-2 text-slate-700">
          Send your details. We will get back to you quickly.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form
            className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                onBlur={() => markTouched("name")}
                className="mt-2 w-full rounded-xl border px-3 py-3 outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                onBlur={() => markTouched("phone")}
                className="mt-2 w-full rounded-xl border px-3 py-3 outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                placeholder="Your phone number"
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Destination</label>
              <input
                value={form.destination}
                onChange={(e) => onChange("destination", e.target.value)}
                onBlur={() => markTouched("destination")}
                className="mt-2 w-full rounded-xl border px-3 py-3 outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                placeholder="Thailand / Dubai / Manali..."
              />
              {touched.destination && errors.destination && (
                <p className="mt-1 text-sm text-red-600">{errors.destination}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                onBlur={() => markTouched("message")}
                className="mt-2 min-h-[120px] w-full rounded-xl border px-3 py-3 outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                placeholder="Travel dates, budget, number of people..."
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="button"
              onClick={submitWhatsApp}
              className="rounded-full bg-[color:var(--brand-ocean)] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0c4c66] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send Enquiry (WhatsApp)
            </button>

            <a
              href="https://wa.me/917799727979"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--brand-leaf)] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#23894b]"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </form>

        <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-bold">Get in touch</h2>
          <p className="mt-2 text-slate-600">
            Call / WhatsApp for instant response.
          </p>

          <div className="mt-6 space-y-2 text-slate-700">
            <div>📞 +91 77997 27979</div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/friendsholidaypackages?igsh=dmFoc21uMnZ0N3Ex&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-ocean)]"
                aria-label="Instagram: friendsholidaypackages"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-[#E1306C]"
                  fill="currentColor"
                >
                  <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9zm9.25 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/917799727979"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-ocean)]"
                aria-label="WhatsApp"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-[#25D366]"
                  fill="currentColor"
                >
                  <path d="M12.04 2a9.95 9.95 0 0 0-8.5 15.16L2 22l4.98-1.5A9.98 9.98 0 1 0 12.04 2zm0 1.9a8.08 8.08 0 0 1 0 16.16 8.05 8.05 0 0 1-4.08-1.1l-.3-.18-2.96.89.96-2.88-.19-.3A8.05 8.05 0 0 1 12.04 3.9zm4.47 10.61c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.16 0 1.28.93 2.52 1.06 2.69.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="text-sm font-semibold text-slate-600">Address:</div>
            <div className="text-sm text-slate-600">
              Plot No 3&amp;4, Shop No 1, Road No 5, Prashanthi Hills, Pragathi Nagar,
              Nizampet, Medchal-Malkajgiri, Telangana 500090
            </div>
          </div>

            <div className="mt-8 rounded-xl bg-[color:var(--brand-mist)] p-4 text-sm text-slate-700">
              Next: we can connect email sending (Resend/SMTP) after deployment, if needed.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
