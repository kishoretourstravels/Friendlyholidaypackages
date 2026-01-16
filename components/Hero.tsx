 "use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [offerOpen, setOfferOpen] = useState(false);
  const [showReward, setShowReward] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(14,90,122,0.9) 0%, rgba(14,90,122,0.65) 35%, rgba(249,115,22,0.7) 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[color:var(--brand-sun)] opacity-40 blur-3xl animate-float-slow" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[color:var(--brand-sky)] opacity-40 blur-3xl animate-float-slow" />
      </div>

      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-20 text-left text-white">
        <div className="animate-rise rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
          Modern holiday planners
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <p className="text-sm font-semibold tracking-wide text-white/90">
            Explore the World With
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            FRIENDS HOLIDAY PACKAGES
          </h1>
        </div>

        <p className="animate-rise max-w-2xl text-base text-white/90 sm:text-lg [animation-delay:220ms]">
          Best Price Guarantee
        </p>

        <div className="animate-rise mt-2 flex flex-col gap-3 [animation-delay:320ms]">
          <Link
            href="/packages"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-ocean)] shadow-md hover:bg-white/90"
          >
            View Packages
          </Link>

          <div className="flex flex-row flex-wrap gap-3">
            <a
              href="https://wa.me/917799727979"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--brand-leaf)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#23894b]"
            >
              WhatsApp Us
            </a>

          <button
            type="button"
            onClick={() => setOfferOpen(true)}
            className="relative rounded-full bg-[color:var(--brand-sunset)] px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#e86a16]"
          >
              <span
                aria-hidden
                className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white/90 text-[color:var(--brand-sunset)] shadow-sm"
              >
                ✦
              </span>
              Claim Your Offer
            </button>
          </div>
        </div>

        <div className="animate-rise flex flex-wrap gap-3 text-sm text-white/90 [animation-delay:420ms]">
          <span className="rounded-full bg-white/10 px-4 py-2">Custom Itineraries</span>
          <span className="rounded-full bg-white/10 px-4 py-2">Visa Guidance</span>
          <span className="rounded-full bg-white/10 px-4 py-2">24/7 Support</span>
        </div>
      </div>

      {offerOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4 py-8">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-white"
              onClick={() => {
                setOfferOpen(false);
                setShowReward(false);
              }}
              aria-label="Close offer form"
            >
              Close
            </button>

            {!showReward && (
              <div
                className="relative px-6 py-10 text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(6, 25, 38, 0.55), rgba(6, 25, 38, 0.55)), url(https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  Thailand special offer
                </div>
                <div className="mt-3 text-2xl font-extrabold">
                  Get Upto 50% Discount on Thailand package
                </div>
              </div>
            )}

            <div className="px-6 py-6">
              {!showReward ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Name</label>
                    <input
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Email</label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Mobile No</label>
                    <input
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      City (with postcode)
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-ocean)]"
                      placeholder="Hyderabad 500090"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowReward(true)}
                    className="w-full rounded-full bg-[color:var(--brand-ocean)] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c4c66]"
                  >
                    Check Your Eligibility
                  </button>
                </div>
              ) : (
                <div
                  className="relative overflow-hidden rounded-3xl border border-[color:var(--brand-sun)]/40 px-6 py-10 text-center shadow-xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 12% 18%, rgba(255, 255, 255, 0.7), transparent 40%), radial-gradient(circle at 85% 15%, rgba(255, 219, 168, 0.8), transparent 45%), radial-gradient(circle at 15% 80%, rgba(255, 238, 201, 0.9), transparent 50%), linear-gradient(135deg, #fff7e0 0%, #ffe7c7 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -left-10 -top-6 h-24 w-40 rotate-[-18deg] rounded-full bg-[color:var(--brand-sun)]/60 blur-2xl" />
                    <div className="absolute right-4 -top-2 h-20 w-32 rotate-[12deg] rounded-full bg-[color:var(--brand-sunset)]/50 blur-2xl" />
                    <div className="absolute bottom-4 left-6 h-20 w-36 rotate-[10deg] rounded-full bg-[color:var(--brand-leaf)]/40 blur-2xl" />
                  </div>
                  <div className="relative text-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-sunset)]">
                      Congratulations
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-[color:var(--brand-ink)]">
                      You are Unlocked for 2 Dinners,
                      <span className="mt-2 block">Day 2 &amp; Day 4</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
