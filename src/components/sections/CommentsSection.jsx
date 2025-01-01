import Marquee from "@/components/ui/marquee";
import SectionTitle from "./SectionTitle";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@nextui-org/react";
import { ChatDotsIcon } from "@/icons";
import Link from "next/link";
import CommentCard from "./CommentCard";

export const reviews = [
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
  {
    name: "Burak",
    date: "20.08.2024",
    body: "Beklentilerimin çok ötesindeydi. Harika bir deneyim yaşadım.",
  },
  {
    name: "Elif",
    date: "30.09.2024",
    body: "Tüm süreç çok kolay ve hızlıydı. Çok memnun kaldım.",
  },
  {
    name: "Eren",
    date: "12.02.2025",
    body: "Her şey planlandığı gibi ilerledi. Profesyonellik üst düzeydeydi.",
  },
  {
    name: "Selin",
    date: "08.04.2025",
    body: "Gerçekten güven veren bir hizmet. Herkese tavsiye ederim.",
  },
  {
    name: "Hakan",
    date: "22.06.2024",
    body: "Çok ilgili ve çözüm odaklı bir ekip. Teşekkür ederim.",
  },
  {
    name: "Esra",
    date: "03.10.2024",
    body: "Aldığım hizmetten çok memnun kaldım. Harika bir deneyimdi.",
  },
  {
    name: "Kerem",
    date: "27.11.2024",
    body: "Bu kadar iyi bir hizmet beklemiyordum. Çok etkilendim.",
  },
  {
    name: "Seda",
    date: "19.01.2025",
    body: "Hızlı ve etkili bir hizmetti. Her şey mükemmeldi.",
  },
  {
    name: "Emre",
    date: "14.05.2025",
    body: "Ekip çok profesyoneldi ve her adımda destek oldular.",
  },
  {
    name: "Deniz",
    date: "01.12.2024",
    body: "Çok samimi bir ekip ve harika bir hizmet. Teşekkür ederim.",
  },
  {
    name: "Duygu",
    date: "09.03.2025",
    body: "İşlerini gerçekten severek yapıyorlar. Harika bir deneyim yaşadım.",
  },
  {
    name: "Can",
    date: "21.02.2025",
    body: "Her şey planlandığı gibi ilerledi. Bu hizmeti herkese öneriyorum.",
  },
];

function CommentsSection() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="mb-12" id="yorumlar">
      <SectionTitle
        title="Ziyaretçi Görüşleri"
        subTitle="Yorumlar"
        description="Beni tercih edenlerin yorumlarını inceleyin ve düşüncelerini öğrenin."
        icon={<ChatDotsIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <BlurFade delay={0.25} inView>
        <div className="relative max-w-7xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee
            pauseOnHover
            style={{ "--duration": `${Math.floor(firstRow.length * 8)}s` }}
          >
            {firstRow.map((review, index) => (
              <CommentCard key={index} review={review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            style={{ "--duration": `${Math.floor(secondRow.length * 8)}s` }}
          >
            {secondRow.map((review, index) => (
              <CommentCard key={index} review={review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
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
