import { ChevronRight, PenIcon } from "@/icons";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

function BlogsSection() {
  return (
    <section className="mx-auto max-w-7xl mt-12" id="yazilar">
      <SectionTitle
        title="Sağlık İçin Bilgi"
        subTitle="Yazılarım"
        description="Sağlıklı yaşam, kadın sağlığı trendleri ve bilinmesi gerekenler bu sayfada sizi bekliyor."
        icon={<PenIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="group flex flex-col gap-3 p-5 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image.png"
              alt="art cover"
              loading="lazy"
              width={350}
              height={350}
              className="max-h-[350px] h-auto w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>
          <Link href="">
            <h3 className="text-lg font-bold text-black group-hover:text-purple-600 duration-300">
              Hamilelikte Sağlıklı Beslenmenin Önemi ve Altın Kurallar
            </h3>
          </Link>
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 text-sm">12.01.2025</span>
            <Button
              className="bg-purple-600 text-white"
              as={Link}
              size="sm"
              href=""
              endContent={<ChevronRight className="w-4 h-4" />}
            >
              Yazıyı Oku
            </Button>
          </div>
        </div>
        <div className="group flex flex-col gap-3 p-5 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image.png"
              alt="art cover"
              loading="lazy"
              width={350}
              height={350}
              className="max-h-[350px] h-auto w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>
          <Link href="">
            <h3 className="text-lg font-bold text-black group-hover:text-purple-600 duration-300">
              Hamilelikte Sağlıklı Beslenmenin Önemi ve Altın Kurallar
            </h3>
          </Link>
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 text-sm">12.01.2025</span>
            <Button
              className="bg-purple-600 text-white"
              as={Link}
              size="sm"
              href=""
              endContent={<ChevronRight className="w-4 h-4" />}
            >
              Yazıyı Oku
            </Button>
          </div>
        </div>
        <div className="group flex flex-col gap-3 p-5 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/image.png"
              alt="art cover"
              loading="lazy"
              width={350}
              height={350}
              className="max-h-[350px] h-auto w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>
          <Link href="">
            <h3 className="text-lg font-bold text-black group-hover:text-purple-600 duration-300">
              Hamilelikte Sağlıklı Beslenmenin Önemi ve Altın Kurallar
            </h3>
          </Link>
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 text-sm">12.01.2025</span>
            <Button
              className="bg-purple-600 text-white"
              as={Link}
              size="sm"
              href=""
              endContent={<ChevronRight className="w-4 h-4" />}
            >
              Yazıyı Oku
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
