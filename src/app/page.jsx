import { AboutSection } from "@/components/about/About";
import { CTASection } from "@/components/CTASection/CTASection";
import { FeaturesSection } from "@/components/Features/FeaturesSection";
import HeroSection from "@/components/heroSection/HeroSection";
import Hero from "@/components/home/Hero";
import { ItemsPreview } from "@/components/ItemsPreview/ItemsPreview";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection/>
        <Hero />
        <AboutSection />
      <FeaturesSection />
      <ItemsPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      </div>
    </main>
  );
}
