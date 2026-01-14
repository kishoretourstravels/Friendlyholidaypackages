const testimonials = [
  {
    name: "Rahul",
    rating: 5,
    text: "Excellent service and great package price. Hotel and cab were perfect!",
    place: "Hyderabad",
  },
  {
    name: "Sneha",
    rating: 5,
    text: "Very smooth planning. They supported us throughout the trip. Highly recommended.",
    place: "Vijayawada",
  },
  {
    name: "Kiran",
    rating: 5,
    text: "Best experience! Custom itinerary and on-time responses on WhatsApp.",
    place: "Warangal",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} aria-hidden className="text-yellow-500">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[color:var(--brand-mist)]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">
            Customer Testimonials
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            Hear what our happy customers say about their travel experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur"
            >
              <Stars n={t.rating} />
              <p className="mt-4 text-slate-700">“{t.text}”</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-500">{t.place}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
