import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";
import CommentsSection from "@/components/sections/CommentsSection";
import FaqsSection from "@/components/sections/FaqsSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogsSection from "@/components/sections/BlogsSection";

export default function Home() {
  return (
    <div className="pb-12">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CommentsSection />
      <BlogsSection />
      <FaqsSection />
    </div>
  );
}
