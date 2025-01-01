import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";
import CommentsSection from "@/components/sections/CommentsSection";
import FaqsSection from "@/components/sections/FaqsSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CommentsSection />
      <BlogsSection />
      <ContactSection />
      <FaqsSection />
    </div>
  );
}
