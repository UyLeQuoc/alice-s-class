import { Header } from "@/components/header";
import { AliceClassHeroSection } from "@/components/home/alice-class-hero-section";
import { BenefitSection } from "@/components/home/benefit-section";
import { ConsultationSection } from "@/components/home/consultation-section";
import { ContactFormSection } from "@/components/home/contact-section";
import FutureSection from "@/components/home/future-section";
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
        <BenefitSection />

        <FutureSection />

        <ContactFormSection />

        <Image
          src="/assets/footer.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-cover w-full"
        />
      </main>
    </div>
  );
}
