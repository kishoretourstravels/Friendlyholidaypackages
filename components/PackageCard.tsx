import Link from "next/link";
import type { TourPackage } from "@/data/packages";

export default function PackageCard({ p }: { p: TourPackage }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-sm backdrop-blur brand-shadow">
      <div className="relative">
        <img src={p.image} alt={p.title} className="h-52 w-full object-cover" />
        {p.saveBadge && (
          <span className="absolute right-3 top-3 rounded-full bg-[color:var(--brand-sunset)] px-3 py-1 text-xs font-semibold text-white">
            {p.saveBadge}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="text-lg font-bold">{p.title}</div>

        <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-[color:var(--brand-mist)] px-3 py-1">
            📅 {p.duration}
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
            {p.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="text-[color:var(--brand-leaf)]">✔</span> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <div className="text-xs text-slate-500">Starting from</div>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-sm text-slate-400 line-through">{p.oldPrice}</span>
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
  );
}
