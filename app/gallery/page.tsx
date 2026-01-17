export default function GalleryPage() {
  return (
    <main className="bg-[color:var(--brand-cream)]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[color:var(--brand-ink)]">
          Travel Gallery
        </h1>
        <p className="mt-2 text-slate-700">
          We will fill our Gallery with your Memories.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-2xl border border-white/70 bg-white/70 shadow-sm"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
