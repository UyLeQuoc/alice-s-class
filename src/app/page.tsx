import { Header } from "@/components/header";
import { AliceClassHeroSection } from "@/components/home/alice-class-hero-section";
import { ConsultationBenefitsSection } from "@/components/home/benefit-section";
import { ConsultationSection } from "@/components/home/consultation-section";
import { ContactFormSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ResultSection } from "@/components/home/result-section";
import { TestimonialsSection } from "@/components/home/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <HeroSection />
        <AliceClassHeroSection />
        <ConsultationSection />
        <TestimonialsSection />
        <ResultSection />
        <Image
          src="/assets/class.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
        <ConsultationBenefitsSection />

        <Image
          src="/assets/class-1.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />

        <ContactFormSection />

        
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Hello World
      </footer> */}
    </div>
  );
}
