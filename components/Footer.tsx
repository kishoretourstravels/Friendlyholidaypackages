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
          <div className="font-semibold">Popular Destinations</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <span>Thailand</span>
            <span>Manali</span>
            <span>Kedarnath</span>
            <span>Dubai</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">Contact Info</div>
          <div className="grid gap-2 text-sm text-slate-300">
            <a href="tel:+917799727979" className="hover:text-white">+91 77997 27979</a>
            <div className="text-lg font-semibold">Address:</div>
            <span className="-mt-1">
              Plot No 3&amp;4, Shop No 1, Road No 5, Prashanthi Hills, Pragathi Nagar, Nizampet,
              Medchal-Malkajgiri, Rangareddy, Telangana 500090
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
