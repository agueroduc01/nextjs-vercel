import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/home/HeroSection";
import StatsSection from "@/src/components/home/StatsSection";
import AboutPreview from "@/src/components/home/AboutPreview";
import FeaturesSection from "@/src/components/home/FeaturesSection";
import ServicesPreview from "@/src/components/home/ServicesPreview";
import CTASection from "@/src/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreview />
        <FeaturesSection />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
