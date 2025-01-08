import Marquee from "@/components/ui/marquee";
import SectionTitle from "./SectionTitle";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@nextui-org/react";
import { ChatDotsIcon } from "@/icons";
import Link from "next/link";
import CommentCard from "./CommentCard";
import { getComments } from "@/api/endpoints";

async function CommentsSection() {
  const getData = getComments();
  const data = await Promise.resolve(getData);
  const activeData = data.filter(
    (item) => Number(item.publish) === 1 && !item.deleted_at
  );

  if (!data || !activeData || activeData.length === 0) return;

  const firstRow = activeData.slice(0, activeData.length / 2);
  const secondRow = activeData.slice(activeData.length / 2);

  return (
    <section className="mb-12" id="yorumlar">
      <SectionTitle
        title="Ziyaretçi Görüşleri"
        subTitle="Yorumlar"
        description="Beni tercih edenlerin yorumlarını inceleyin ve düşüncelerini öğrenin."
        icon={<ChatDotsIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <BlurFade delay={0.5} inView>
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
        delay={0.75}
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
