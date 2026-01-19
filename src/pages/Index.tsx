import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import SimulationSection from "@/components/landing/SimulationSection";
import StatisticsSection from "@/components/landing/StatisticsSection";
import GalleryOfShame from "@/components/landing/GalleryOfShame";
import VictimStories from "@/components/landing/VictimStories";
import LegalSection from "@/components/landing/LegalSection";
import DistractionCards from "@/components/landing/DistractionCards";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"id" | "en">("id");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SimulationSection />
      <StatisticsSection />
      <GalleryOfShame />
      <VictimStories />
      <LegalSection />
      <DistractionCards />
      <CTASection />
      <Footer language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default Index;
