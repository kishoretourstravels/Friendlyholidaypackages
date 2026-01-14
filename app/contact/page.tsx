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
            <div>🌐 www.friendsholidaypackages.com</div>
            <div>📷 Instagram: friendsholidaypackages</div>
            <div className="text-sm font-semibold text-slate-600">Address:</div>
            <div className="text-sm text-slate-600">
              Plot No 3&amp;4, Shop No 1, Road No 5, Prashanthi Hills, Pragathi Nagar,
              Nizampet, Medchal-Malkajgiri, Rangareddy, Telangana 500090
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
