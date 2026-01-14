import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(14,90,122,0.95) 0%, rgba(45,140,187,0.9) 60%, rgba(245,158,11,0.9) 100%)",
        }}
      >
        <div className="absolute -left-12 top-6 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-14 text-center text-white">
          <h1 className="text-3xl font-extrabold">Testimonials</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Real reviews from our happy customers.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
