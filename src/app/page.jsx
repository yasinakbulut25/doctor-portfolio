import { Suspense } from "react";
import AboutSection from "@/components/sections/AboutSection";
import Loading from "@/components/loading";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CommentsSection from "@/components/sections/CommentsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import FaqsSection from "@/components/sections/FaqsSection";

export default function Page() {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CommentsSection />
        <BlogsSection />
        {/* <ContactSection /> */}
        <FaqsSection />
      </Suspense>
    </div>
  );
}
