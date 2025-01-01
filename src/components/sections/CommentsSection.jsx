import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import SectionTitle from "./SectionTitle";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@nextui-org/react";
import { ChatDotsIcon } from "@/icons";
import Link from "next/link";

function CommentsSection() {
  const reviews = [
    {
      name: "Ahmet",
      date: "02.01.2025",
      body: "Hayatım boyunca böyle bir şey görmedim. Gerçekten harika. Çok beğendim.",
    },
    {
      name: "Merve",
      date: "15.12.2024",
      body: "Ne diyeceğimi bilemiyorum. Hayran kaldım. Mükemmel bir deneyimdi.",
    },
    {
      name: "Ali",
      date: "10.03.2025",
      body: "Bu hizmet beni gerçekten etkiledi. Çok teşekkür ederim.",
    },
    {
      name: "Zeynep",
      date: "25.01.2025",
      body: "Tek kelimeyle muhteşem. Çok memnun kaldım. Herkese tavsiye ederim.",
    },
    {
      name: "Mehmet",
      date: "05.11.2024",
      body: "Gerçekten profesyonel bir ekip. Her şey mükemmeldi. Teşekkürler.",
    },
    {
      name: "Ayşe",
      date: "17.07.2024",
      body: "İşlerini severek yapan bir ekip. Sonuçlar beni çok mutlu etti.",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({ name, date, body }) => {
    return (
      <figure
        className={cn(
          "relative w-80 max-w-full cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] hover:border-purple-500 duration-300"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <h4 className="text-sm text-purple-600 font-medium">{name}</h4>
            <p className="text-xs text-slate-600">{date}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-black">{body}</blockquote>
      </figure>
    );
  };

  return (
    <section className="mt-12" id="yorumlar">
      <SectionTitle
        title="Ziyaretçi Görüşleri"
        subTitle="Yorumlar"
        description="Beni tercih edenlerin yorumlarını inceleyin ve düşüncelerini öğrenin."
        icon={<ChatDotsIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <BlurFade delay={0.25} inView>
        <div className="relative max-w-7xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-50"></div>
        </div>
      </BlurFade>
      <BlurFade
        delay={0.25}
        inView
        className="flex items-center justify-center mt-6"
      >
        <Button
          className="bg-purple-600 text-white"
          startContent={<ChatDotsIcon className="w-4 h-4" />}
          as={Link}
          href="/yorumlar"
        >
          Tüm Yorumları Gör
        </Button>
      </BlurFade>
    </section>
  );
}

export default CommentsSection;
