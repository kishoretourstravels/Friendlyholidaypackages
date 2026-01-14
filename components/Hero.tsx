import Link from "next/link";

export default function Hero() {
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
          7+ Years of Experience • 3000+ Happy Customers • Best Price Guarantee
        </p>

        <div className="animate-rise mt-2 flex flex-col gap-3 sm:flex-row [animation-delay:320ms]">
          <Link
            href="/packages"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-ocean)] shadow-md hover:bg-white/90"
          >
            View Packages
          </Link>

          <a
            href="https://wa.me/917799727979"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[color:var(--brand-leaf)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#23894b]"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="animate-rise flex flex-wrap gap-3 text-sm text-white/90 [animation-delay:420ms]">
          <span className="rounded-full bg-white/10 px-4 py-2">Custom Itineraries</span>
          <span className="rounded-full bg-white/10 px-4 py-2">Visa Guidance</span>
          <span className="rounded-full bg-white/10 px-4 py-2">24/7 Support</span>
        </div>
      </div>
    </section>
  );
}
