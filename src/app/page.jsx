import { Suspense } from "react";
import AboutSection from "@/components/sections/AboutSection";
import Loading from "@/components/loading";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CommentsSection from "@/components/sections/CommentsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import FaqsSection from "@/components/sections/FaqsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Doç. Dr. Arzu Yurci | Kadın Sağlığı ve Tüp Bebek",
  description:
    "Kadın Hastalıkları ve Doğum, Tüp Bebek Uzmanı ile sağlığınıza önem verin. Gebelik takibi, kısırlık tedavisi ve tüp bebek uygulamalarında uzman destek alın. Sağlıklı bir gelecek için yanınızdayız.",
};

export default function Page() {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CommentsSection />
        <BlogsSection />
        <ContactSection />
        <FaqsSection />
      </Suspense>
    </div>
  );
}
