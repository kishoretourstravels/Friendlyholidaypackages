"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I book a package?",
    a: "You can contact us via WhatsApp or call. We will share itinerary and confirm booking.",
  },
  {
    q: "Can you customize the itinerary?",
    a: "Yes, we create custom packages based on your dates, budget and preferences.",
  },
  {
    q: "Do you provide hotel + cab?",
    a: "Yes, we provide complete travel solutions: stay, cab, sightseeing and support.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-[color:var(--brand-cream)]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">FAQ</h1>
        <p className="mt-2 text-slate-700">Frequently asked questions.</p>

        <div className="mt-8 space-y-3">
          {faqs.map((f, idx) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/70 bg-white/90 shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-semibold">{f.q}</span>
                <span className="text-slate-500">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-slate-700">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
