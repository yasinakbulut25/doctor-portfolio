import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";
import CommentsSection from "@/components/sections/CommentsSection";
import FaqsSection from "@/components/sections/FaqsSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CommentsSection />
      <FaqsSection />
    </div>
  );
}
