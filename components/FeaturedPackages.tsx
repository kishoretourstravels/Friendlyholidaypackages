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
    slug: "manali",
    title: "Manali Adventure",
    days: "5 Days / 4 Nights",
    location: "Manali",
    save: "Save ₹2000",
    oldPrice: "₹11,999",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Solang Valley", "Atal Tunnel", "Snow Activities"],
  },
  {
    slug: "kedarnath",
    title: "Kedarnath Yatra",
    days: "3 Days / 2 Nights",
    location: "Kedarnath",
    save: "Save ₹5000",
    oldPrice: "₹24,999",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Temple Darshan", "Helicopter Option", "Guided Trek"],
  },
  {
    slug: "dubai",
    title: "Dubai Luxury",
    days: "5 Days / 4 Nights",
    location: "Dubai",
    save: "Save ₹40000",
    oldPrice: "₹99,999",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Burj Khalifa", "Desert Safari", "Marina Cruise"],
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <span className="absolute right-3 top-3 rounded-full bg-[color:var(--brand-sunset)] px-3 py-1 text-xs font-semibold text-white">
                  {p.save}
                </span>
              </div>

              <div className="p-5">
                <div className="text-lg font-bold">{p.title}</div>

                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-[color:var(--brand-mist)] px-3 py-1">
                    📅 {p.days}
                  </span>
                  <span className="rounded-full bg-[color:var(--brand-mist)] px-3 py-1">
                    📍 {p.location}
                  </span>
                </div>

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

                <Link
                  href={`/packages/${p.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-ocean)] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0c4c66]"
                >
                  View Details <span aria-hidden>→</span>
                </Link>

                <a
                  href="https://wa.me/917799727979"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-leaf)] px-4 py-3 text-sm font-semibold text-white hover:bg-[#23894b]"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/packages"
            className="rounded-full bg-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#091420]"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
