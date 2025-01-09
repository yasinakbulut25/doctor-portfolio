import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurFade from "@/components/ui/blur-fade";
import SectionTitle from "./SectionTitle";
import { getServices } from "@/api/endpoints";

async function ServicesSection() {
  const data = await getServices();
  const activeData = data.filter(
    (item) => Number(item.publish) === 1 && !item.deleted_at
  );

  if (!data || !activeData || activeData.length === 0) return;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-12" id="hizmetler">
      <SectionTitle sectionKey="sectionServices" />
      <div className="columns-1 sm:columns-2 lg:columns-3">
        {activeData.map((service, index) => (
          <BlurFade
            key={index}
            className="mb-8"
            delay={0.25 + index * 0.1}
            inView
          >
            <div className="relative w-full sm:max-w-full max-w-[400px] mx-auto p-8 bg-white shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden">
              <div className="flex flex-col gap-3">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-1/2 opacity-40"
                >
                  <div className="blur-[140px] h-12 bg-gradient-to-br from-purple-600 to-purple-400" />
                </div>
                <Image
                  className="object-contain rounded-lg mb-3"
                  src={service.image}
                  width={50}
                  height={50}
                  alt={service.title}
                />
                <h3 className="text-lg font-bold text-black">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 text-pretty">
                  {service.description}
                </p>
              </div>
              <BorderBeam
                colorFrom="#9c40ff"
                colorTo="#c084fc"
                size={150}
                duration={10}
                delay={9 + index * 1.5}
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
