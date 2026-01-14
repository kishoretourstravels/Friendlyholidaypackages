import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(14,90,122,0.95) 0%, rgba(45,140,187,0.9) 55%, rgba(249,115,22,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-white blur-2xl" />
        <div className="absolute -left-8 bottom-6 h-48 w-48 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Create Your Own Memories</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          Plan your dream trip with custom itineraries, local expertise, and best price guarantees.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/packages"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-ocean)] hover:bg-white/90"
          >
            View Packages
          </Link>

          <a
            href="https://wa.me/917799727979"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[color:var(--brand-leaf)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#23894b]"
          >
            Book Now (WhatsApp)
          </a>
        </div>
      </div>
    </section>
  );
}
