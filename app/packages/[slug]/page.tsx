import Link from "next/link";
import { notFound } from "next/navigation";
import { PACKAGES } from "@/data/packages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

const thailandItinerary = [
  {
    day: "Day 1: Arrival – Bangkok to Pattaya",
    items: [
      "Arrive in Bangkok and transfer to Pattaya.",
      "Breakfast en route at Tiger Topia.",
      "Check-in to your 3-star/4-star hotel and relax.",
      "Lunch at Indian restaurant.",
      "Evening at leisure to explore local markets or beaches.",
      "Overnight stay in Pattaya.",
    ],
  },
  {
    day: "Day 2: Coral Island Tour",
    items: [
      "Breakfast at hotel (complete by 8:30 AM).",
      "Transfer to Coral Island by speedboat.",
      "Enjoy beach time and optional water activities (own expense).",
      "Lunch included.",
      "Return to hotel and rest.",
      "Evening free for shopping or exploring Pattaya streets.",
      "Overnight stay in Pattaya.",
    ],
  },
  {
    day: "Day 3: Pattaya Local Sightseeing",
    items: [
      "Breakfast at hotel (complete by 8:30 AM).",
      "Visit Gems Gallery and explore local areas.",
      "Lunch at Indian or local restaurant.",
      "Enjoy Crocodile Show and Tiger Zoo Park.",
      "Evening leisure time — explore Walking Street or beaches.",
      "Overnight stay in Pattaya.",
    ],
  },
  {
    day: "Day 4: Pattaya to Bangkok",
    items: [
      "Breakfast at hotel before 8:30 AM.",
      "Transfer to Bangkok and check-in to 3-star/4-star hotel.",
      "Lunch at nearby Indian or local restaurant.",
      "Day free for leisure or shopping at Bangkok malls.",
      "Overnight stay in Bangkok.",
    ],
  },
  {
    day: "Day 5: Bangkok City Tour – Departure",
    items: [
      "Breakfast at hotel.",
      "Explore local attractions including Buddha Temples and city tour.",
      "Lunch at Indian restaurant.",
      "Free time for shopping (if schedule allows).",
      "Check-out and transfer to airport for departure.",
    ],
  },
];

const thailandInclusions = [
  "Visa charges (if applicable).",
  "Daily breakfast at hotel.",
  "Breakfast and lunch as per itinerary.",
  "500ml water bottle (2 per person per day).",
  "Private vehicle for transfers and sightseeing.",
  "English-speaking tour guide for group (minimum 40 pax).",
  "Friends Holiday Packages Tour Coordinator.",
  "Entry tickets for attractions mentioned in itinerary.",
];

const thailandExclusions = [
  "International flight tickets.",
  "Water sports and other optional activities at Coral Island.",
  "Alcoholic beverages and personal expenses.",
  "Any additional sightseeing or activities not mentioned.",
];

const thailandThingsToCarry = [
  "Valid passport with minimum 6 months validity.",
  "Visa documents and travel insurance.",
  "Comfortable clothing, swimwear, and footwear.",
  "Sunscreen, sunglasses, hat, and light jacket.",
  "Personal medicines and first-aid kit.",
  "Camera, phone charger, and waterproof cover.",
];

const thailandSpecialIncludes = [
  "Alcazar Show at Pattaya.",
  "King Power Mahanakhon at Bangkok.",
  "Safari World Tour at Bangkok.",
];

const thailandNotes = [
  "Hotel selection and room availability are subject to confirmation at the time of booking.",
  "Itinerary order may change due to weather, traffic, or local operational conditions.",
  "Passport must be valid for at least 6 months from the date of travel.",
  "Optional activities and personal expenses are not included unless mentioned.",
  "Final cost may vary based on travel dates, hotel category, and group size.",
];


export default async function PackageDetailsPage({ params }: Props) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);

  if (!pkg) return notFound();

  const phone = "917799727979";
  const text = encodeURIComponent(
    `Hi, I'm interested in the ${pkg.title} package. Please share full itinerary and booking details.`
  );
  const wa = `https://wa.me/${phone}?text=${text}`;

  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(14,90,122,0.95) 0%, rgba(45,140,187,0.9) 60%, rgba(245,158,11,0.9) 100%)",
        }}
      >
        <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-12 text-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-white/90">Tour Package</p>
              <h1 className="mt-2 text-3xl font-extrabold">{pkg.title}</h1>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/90">
                <span className="rounded-full bg-white/15 px-3 py-1">📅 {pkg.duration}</span>
                <span className="rounded-full bg-white/15 px-3 py-1">📍 {pkg.location}</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs text-white/90">Starting from</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-sm text-white/70 line-through">{pkg.oldPrice}</span>
                <span className="text-3xl font-extrabold">{pkg.price}</span>
                <span className="text-sm text-white/90">/person</span>
              </div>
              {pkg.saveBadge && (
                <div className="mt-2 inline-block rounded-full bg-[color:var(--brand-sunset)] px-3 py-1 text-xs font-semibold">
                  {pkg.saveBadge}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--brand-leaf)] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#23894b]"
            >
              Book via WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[color:var(--brand-ocean)] hover:bg-white/90"
            >
              Enquiry Form
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-cream)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
            <img src={pkg.image} alt={pkg.title} className="h-72 w-full object-cover" />
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Package Highlights</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[color:var(--brand-leaf)]">✔</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {pkg.slug === "thailand" && (
              <div className="mt-8 rounded-2xl bg-[color:var(--brand-mist)] p-5 text-sm text-slate-700">
                <div className="text-base font-semibold text-[color:var(--brand-ink)]">
                  5 Days / 4 Nights Thailand Itinerary
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  (3 Days in Pattaya • 2 Days in Bangkok)
                </div>
                <div className="mt-4 space-y-4">
                  {thailandItinerary.map((d) => (
                    <div key={d.day}>
                      <div className="font-semibold text-[color:var(--brand-ink)]">{d.day}</div>
                      <ul className="mt-2 space-y-1">
                        {d.items.map((i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-sunset)]" />
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/packages"
                className="rounded-full border border-[color:var(--brand-ocean)] px-5 py-3 text-center text-sm font-semibold text-[color:var(--brand-ocean)] hover:bg-[color:var(--brand-mist)]"
              >
                ← Back to Packages
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--brand-ocean)] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0c4c66]"
              >
                Get Itinerary on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {pkg.slug === "thailand" && (
          <div className="mx-auto max-w-6xl px-4 pb-16">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 120"
                    className="h-72 w-72 text-[color:var(--brand-leaf)] sm:h-80 sm:w-80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="60" cy="60" r="42" />
                    <path d="M30 65l20 20 40-50" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[color:var(--brand-ink)]">Package Inclusions</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {thailandInclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-leaf)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 120"
                    className="h-72 w-72 text-[color:var(--brand-sunset)] sm:h-80 sm:w-80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  >
                    <circle cx="60" cy="60" r="42" />
                    <path d="M30 30l60 60M90 30l-60 60" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[color:var(--brand-ink)]">Package Exclusions</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {thailandExclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-sunset)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 120"
                    className="h-72 w-72 text-[color:var(--brand-ocean)] sm:h-80 sm:w-80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinejoin="round"
                  >
                    <circle cx="60" cy="60" r="42" />
                    <path d="M60 24L88 78H32z" />
                    <line x1="60" y1="43" x2="60" y2="56" strokeLinecap="round" strokeWidth="6" />
                    <circle cx="60" cy="68" r="3" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[color:var(--brand-ink)]">Things To Carry</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {thailandThingsToCarry.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-ocean)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/70 bg-white/90 p-6 text-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-500">Package Cost</div>
                  <div className="mt-1 text-2xl font-extrabold text-[color:var(--brand-ink)]">
                    ₹16,999/- <span className="text-sm font-semibold text-slate-500">per person</span>
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Standard Package</div>
                  <div className="mt-3 text-sm font-semibold text-[color:var(--brand-ink)]">
                    Special Package: ₹10,000/- Extra
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Special group discounts available. Prices vary based on travel dates and hotel
                  selection.
                </div>
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-[color:var(--brand-ink)]">
                  Special Package Includes
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {thailandSpecialIncludes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-leaf)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm font-semibold text-[color:var(--brand-ocean)]">
                End of Tour — Friends Holiday Packages
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/70 bg-white/90 p-6 text-sm text-slate-700 shadow-sm">
              <div className="text-sm font-semibold text-[color:var(--brand-ink)]">Notes</div>
              <ul className="mt-4 space-y-2">
                {thailandNotes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-sunset)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
