import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[color:var(--brand-ink)] text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white">
              <Image
                src="/logo.png"
                alt="Friends Holiday Packages logo"
                width={48}
                height={48}
                className="h-full w-full object-cover scale-110"
              />
            </div>
            <div>
              <div className="text-lg font-semibold">Friends Holiday Packages</div>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Your trusted travel partner. Custom packages, best prices, and great support.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">Quick Links</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/packages" className="hover:text-white">Packages</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">International Destinations:</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <span>Thailand</span>
            <span>Indonesia</span>
            <span>Vietnam</span>
            <span>Singapore</span>
            <span>Malaysia</span>
            <span>Dubai</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">Domestic Destinations:</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <span>Kerala</span>
            <span>Manali</span>
            <span>Kedarnath</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">Contact Info</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <a href="tel:+917799727979" className="hover:text-white">+91 77997 27979</a>
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-200">Follow Us</span>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/friendsholidaypackages?igsh=dmFoc21uMnZ0N3Ex&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  aria-label="Instagram: friendsholidaypackages"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-[#E1306C]"
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
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  aria-label="WhatsApp: 77997 27979"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-[#25D366]"
                    fill="currentColor"
                  >
                    <path d="M12.04 2a9.95 9.95 0 0 0-8.5 15.16L2 22l4.98-1.5A9.98 9.98 0 1 0 12.04 2zm0 1.9a8.08 8.08 0 0 1 0 16.16 8.05 8.05 0 0 1-4.08-1.1l-.3-.18-2.96.89.96-2.88-.19-.3A8.05 8.05 0 0 1 12.04 3.9zm4.47 10.61c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.16 0 1.28.93 2.52 1.06 2.69.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="text-lg font-semibold">Address:</div>
            <span className="-mt-1">
              Plot No 3&amp;4, Shop No 1, Road No 5, Prashanthi Hills, Pragathi Nagar, Nizampet,
              Medchal-Malkajgiri, Telangana 500090
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Friends Holiday Packages. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
