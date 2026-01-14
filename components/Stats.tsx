const stats = [
  { icon: "📅", value: "7+", label: "Years Experience" },
  { icon: "👥", value: "3000+", label: "Happy Customers" },
  { icon: "🏅", value: "100%", label: "Satisfaction" },
  { icon: "⭐", value: "4.9", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className="bg-[color:var(--brand-mist)]">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[color:var(--brand-cream)] text-2xl shadow-sm">
              {s.icon}
            </div>
            <div className="mt-4 text-3xl font-extrabold">{s.value}</div>
            <div className="mt-1 text-sm text-slate-700">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
