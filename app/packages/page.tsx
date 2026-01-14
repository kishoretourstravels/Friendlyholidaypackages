import PackageCard from "@/components/PackageCard";
import { PACKAGES } from "@/data/packages";

export default function PackagesPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(14,90,122,0.95) 0%, rgba(45,140,187,0.9) 60%, rgba(245,158,11,0.9) 100%)",
        }}
      >
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Tour Packages</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Explore popular destinations with curated stays and instant support on WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--brand-cream)]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <PackageCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
