import Hero from "@/components/Hero";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Stats from "@/components/Stats";
import FeaturedPackages from "@/components/FeaturedPackages";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsAppFloat />
      <Stats />
      <FeaturedPackages />
      <CTA />
      <Testimonials />
    </main>
  );
}
