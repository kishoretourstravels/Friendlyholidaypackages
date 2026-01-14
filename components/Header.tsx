"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-sky-200">
            <Image
              src="/logo.png"
              alt="Friends Holiday Packages logo"
              width={48}
              height={48}
              className="h-full w-full object-cover scale-110"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block text-base font-semibold text-[color:var(--brand-ink)] sm:text-lg">
              FRIENDS HOLIDAY PACKAGES
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-ocean)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-[color:var(--brand-ocean)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-ocean)] hover:bg-[color:var(--brand-mist)]"
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/917799727979"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[color:var(--brand-leaf)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#23894b]"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-[var(--brand-ink)]/20 px-3 py-2 text-sm lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/60 bg-white/90 lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-mist)]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-2 flex gap-3">
                <Link
                  href="/contact"
                  className="flex-1 rounded-full border border-[color:var(--brand-ocean)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--brand-ocean)] hover:bg-[color:var(--brand-mist)]"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/917799727979"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-[color:var(--brand-leaf)] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#23894b]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
