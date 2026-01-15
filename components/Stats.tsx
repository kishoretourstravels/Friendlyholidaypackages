const stats = [
  { icon: "🏅", value: "100%", label: "Satisfaction" },
  { icon: "💸", value: "Best Price", label: "Guarantee" },
  { icon: "🧾", value: "No Hidden", label: "Charges" },
];

export default function Stats() {
  return (
    <section className="bg-[color:var(--brand-mist)]">
      <div className="mx-auto grid max-w-5xl place-items-center gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="w-full max-w-sm rounded-2xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur"
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
