import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
