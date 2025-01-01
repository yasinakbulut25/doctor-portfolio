import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";
import CommentsSection from "@/components/sections/CommentsSection";
import FaqsSection from "@/components/sections/FaqsSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogsSection from "@/components/sections/BlogsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CommentsSection />
      <BlogsSection />
      <FaqsSection />
      <Footer />
    </div>
  );
}
