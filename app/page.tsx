import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ThemesSection from "@/components/sections/ThemesSection";
import SyncSection from "@/components/sections/SyncSection";
import PricingSection from "@/components/sections/PricingSection";
import DownloadSection from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ThemesSection />
      <SyncSection />
      <PricingSection />
      <DownloadSection />
      <Footer />
    </>
  );
}
