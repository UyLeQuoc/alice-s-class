import { Header } from "@/components/header";
import { AliceClassHeroSection } from "@/components/home/alice-class-hero-section";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonial-section";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <HeroSection />
        <AliceClassHeroSection />
        <TestimonialsSection />
      </main>

      <div className="w-full bg-red-300">
        Full Width
      </div>

      <div className="container bg-fuchsia-400 mx-auto">
        Container
      </div>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Hello World
      </footer> */}
    </div>
  );
}
