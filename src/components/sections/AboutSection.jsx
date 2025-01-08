import React from "react";
import SectionTitle from "./SectionTitle";
import { ChevronRight, UserIcon } from "@/icons";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { getUser } from "@/api/endpoints";

async function AboutSection() {
  const getData = getUser();
  const data = await Promise.resolve(getData);
  if (!data) return;

  const { content, image } = data.about;

  return (
    <section className="mb-12" id="hakkimda">
      <SectionTitle
        title="Beni Tanıyın"
        subTitle="Hakkımda"
        description="Hayat hikayem, değerlerim ve profesyonel deneyimlerim hakkında bilgi edinin."
        icon={<UserIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        <BlurFade delay={0.5} inView>
          <p
            className="text-md text-black font-medium mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Button
            className="bg-purple-600 text-white mt-8"
            endContent={<ChevronRight className="w-4 h-4" />}
            as={Link}
            href="/hakkimda"
          >
            Beni Tanıyın
          </Button>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <div className="relative mx-auto rounded-lg overflow-hidden">
            <Image
              className="object-contain w-full h-auto max-h-[350px]"
              src={image}
              alt="Doç. Dr. Arzu Yurci"
              width={500}
              height={500}
            />
            <BorderBeam
              colorFrom="#9c40ff"
              colorTo="#c084fc"
              size={200}
              duration={10}
              delay={9}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default AboutSection;
