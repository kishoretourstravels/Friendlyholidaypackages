import Link from "next/link";

const featured = [
  {
    slug: "thailand",
    title: "Thailand",
    days: "5 Days / 4 Nights",
    location: "Thailand",
    save: "Save ₹4000",
    oldPrice: "₹20,999",
    price: "₹16,999",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Pattaya + Bangkok", "Coral Island Tour", "Bangkok City Tour"],
  },
  {
    comingSoon: true,
    title: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function FeaturedPackages() {
  return (
    <section className="bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">
            Featured Tour Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            Discover handpicked destinations with exclusive deals and complete travel support.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {featured.map((p) => (
              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-sm backdrop-blur brand-shadow"
              >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full object-cover"
                />
                {!("comingSoon" in p) && (
                  <span className="absolute right-3 top-3 rounded-full bg-[color:var(--brand-sunset)] px-3 py-1 text-xs font-semibold text-white">
                    {p.save}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-bold">{p.title}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-ocean)]">
                      New drops loading
                    </div>
                  </div>
                </div>

                {!("comingSoon" in p) && (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                    <span className="rounded-full bg-[color:var(--brand-mist)] px-3 py-1">
                      📅 {p.days}
                    </span>
                    <span className="rounded-full bg-[color:var(--brand-mist)] px-3 py-1">
                      📍 {p.location}
                    </span>
                  </div>
                )}

                {!("comingSoon" in p) ? (
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-slate-700">
                      Package Highlights:
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="text-[color:var(--brand-leaf)]">✔</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="relative mt-6 overflow-hidden rounded-2xl bg-[color:var(--brand-mist)] px-4 py-6 text-center">
                    <div className="pointer-events-none absolute -right-10 -top-8 h-24 w-24 rounded-full bg-[color:var(--brand-sun)]/40 blur-2xl" />
                    <div className="pointer-events-none absolute -left-6 bottom-6 h-20 w-20 rounded-full bg-[color:var(--brand-sky)]/40 blur-2xl" />
                    <div className="relative inline-flex items-center justify-center rounded-full bg-[color:var(--brand-sunset)] px-5 py-2 text-sm font-semibold text-white shadow-sm">
                      Coming Soon
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      The best packages are on the way
                    </div>
                    <div className="mt-2 text-[11px] font-semibold text-[color:var(--brand-ink)]/70">
                      Stay tuned for flash deals
                    </div>
                  </div>
                )}

                {!("comingSoon" in p) && (
                  <div className="mt-5">
                    <div className="text-xs text-slate-500">Starting from</div>
                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-sm text-slate-400 line-through">
                        {p.oldPrice}
                      </span>
                      <span className="text-2xl font-extrabold text-[color:var(--brand-ocean)]">
                        {p.price}
                      </span>
                      <span className="text-sm text-slate-600">/person</span>
                    </div>
                  </div>
                )}

                {!("comingSoon" in p) && (
                  <Link
                    href={`/packages/${p.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-ocean)] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0c4c66]"
                  >
                    View Details <span aria-hidden>→</span>
                  </Link>
                )}

                {!("comingSoon" in p) && (
                  <a
                    href="https://wa.me/917799727979"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-leaf)] px-4 py-3 text-sm font-semibold text-white hover:bg-[#23894b]"
                  >
                    Book via WhatsApp
                  </a>
                )}

                {"comingSoon" in p && (
                  <div className="mt-6 rounded-2xl border border-dashed border-[color:var(--brand-ocean)]/40 bg-white/80 px-4 py-5 text-center text-sm font-semibold text-slate-600">
                    Early‑bird slots open soon — get priority access.
                  </div>
                )}
              </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
