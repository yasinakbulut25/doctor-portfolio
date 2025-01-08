import { ChevronRight, PenIcon } from "@/icons";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";
import BlurFade from "@/components/ui/blur-fade";
import { getBlogs } from "@/api/endpoints";

async function BlogsSection() {
  const getData = getBlogs();
  const data = await Promise.resolve(getData);
  const activeData = data.filter(
    (item) => Number(item.publish) === 1 && !item.deleted_at
  );

  if (!data || !activeData || activeData.length === 0) return;

  return (
    <section className="mx-auto max-w-7xl mb-12" id="yazilar">
      <SectionTitle
        title="Sağlık İçin Bilgi"
        subTitle="Yazılarım"
        description="Sağlıklı yaşam, kadın sağlığı trendleri ve bilinmesi gerekenler bu sayfada sizi bekliyor."
        icon={<PenIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {activeData.map((post, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.1} inView>
            <Link href="/blog">
              <div className="group flex flex-col gap-3 p-5 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt="art cover"
                    loading="lazy"
                    width={350}
                    height={250}
                    className="max-h-[350px] h-auto w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-purple-600 duration-300">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-500 text-sm">{post.date}</span>
                  <Button
                    className="bg-purple-600 text-white"
                    size="sm"
                    endContent={<ChevronRight className="w-4 h-4" />}
                  >
                    Yazıyı Oku
                  </Button>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
      <BlurFade
        delay={0.75}
        inView
        className="flex items-center justify-center mt-6"
      >
        <Button
          className="bg-purple-600 text-white"
          startContent={<PenIcon className="w-4 h-4" />}
          as={Link}
          href="/yazilar"
        >
          Tüm Yazıları Gör
        </Button>
      </BlurFade>
    </section>
  );
}

export default BlogsSection;
