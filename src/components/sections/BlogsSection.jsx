import { PenIcon } from "@/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import BlurFade from "@/components/ui/blur-fade";
import { getBlogs } from "@/api/endpoints";
import BlogCard from "./BlogCard";
import Link from "next/link";

async function BlogsSection() {
  const data =await getBlogs();
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
          <BlogCard key={index} post={post} index={index} />
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
