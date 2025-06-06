import React from "react";
import SectionTitle from "./SectionTitle";
import { ChevronRight, UserIcon } from "@/icons";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { getSections, getUser } from "@/api/endpoints";
import { sectionKeys } from "@/routes";

async function AboutSection() {
  const data = await getUser();
  const sections = await getSections();
  const section = sections.find(
    (section) =>
      section.sectionKey === sectionKeys.about && Number(section.publish) === 1
  );

  if (!data || !section) return;

  const { content, image } = data.about;

  return (
    <section className="mb-12" id="hakkimda">
      <SectionTitle
        icon={<UserIcon className="w-4 h-4" color="#9c40ff" />}
        sectionKey={sectionKeys.about}
      />
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        <BlurFade delay={0.5} inView>
          <div
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
              className="object-cover w-full h-auto rounded-lg max-h-[400px]"
              src={image}
              alt="Doç. Dr. Arzu Yurci"
              width={500}
              height={500}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default AboutSection;
