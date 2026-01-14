export default function AboutPage() {
  return (
    <main className="bg-[color:var(--brand-cream)]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">About Us</h1>
        <p className="mt-3 text-slate-700">
          Friends Holiday Packages — custom trips, best pricing, and end-to-end support.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
            <h2 className="text-lg font-bold">Our Mission</h2>
            <p className="mt-2 text-slate-600">
              Make travel simple, affordable, and memorable for every customer.
            </p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
            <h2 className="text-lg font-bold">Our Values</h2>
            <p className="mt-2 text-slate-600">
              Transparency, quality stays, verified cabs, and 24/7 support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
