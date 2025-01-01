import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurFade from "@/components/ui/blur-fade";
import SectionTitle from "./SectionTitle";

function ServicesSection() {
  const services = [
    {
      title: "Tüp Bebek Tedavisi (IVF)",
      description:
        "Doğal yollarla çocuk sahibi olamayan çiftler için etkili bir tedavi yöntemidir. Laboratuvar ortamında döllenen embriyo rahme yerleştirilir, süreç kişiye özel planlanır.",
    },
    {
      title: "Kadın Sağlığı Kontrolleri ve Jinekolojik Muayene",
      description:
        "Kadın sağlığını korumak ve hastalıkları erken teşhis etmek için düzenli kontroller yapılır. Rahim, yumurtalık ve diğer üreme organları detaylı incelenir.",
    },
    {
      title: "Gebelik Takibi ve Doğum",
      description:
        "Gebelik sürecinde düzenli kontrollerle bebeğin gelişimi takip edilir. Sağlıklı bir hamilelik ve güvenli bir doğum süreci için destek sunulur.",
    },
    {
      title: "İnfertilite (Kısırlık) Tanı ve Tedavisi",
      description:
        "Çocuk sahibi olamama nedenleri tespit edilerek kişiye özel tedaviler uygulanır. Hormon tedavisi ve cerrahi çözümler sunulabilir.",
    },
    {
      title: "Menopoz Danışmanlığı ve Tedavisi",
      description:
        "Menopoz dönemi şikayetlerini azaltmak için hormon tedavisi ve yaşam tarzı önerileriyle destek sağlanır.",
    },
    {
      title: "Estetik Jinekoloji ve Lazer Tedavileri",
      description:
        "Genital bölge estetiği ve lazer tedavileriyle özgüveninizi artıracak hızlı ve etkili çözümler sunulur.",
    },
  ];

  return (
    <section className="md:container mx-auto px-4 mt-12" id="hizmetler">
      <SectionTitle
        title={"Sizin İçin Yanınızdayız!"}
        subTitle={"Hizmetlerimiz"}
        description={
          "Kadın sağlığı ve doğum alanında, ihtiyaçlarınıza özel çözümler sunuyoruz."
        }
      />
      <div className="columns-1 sm:columns-2 lg:columns-3">
        {services.map((service, index) => (
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
                  src="/uploads/gem.svg"
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
