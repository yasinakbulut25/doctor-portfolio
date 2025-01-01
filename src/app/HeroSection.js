import Image from "next/image";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";

function HeroSection() {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-purple-600 to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>
      <div className="container-xl">
        <div className="relative min-h-dvh pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto flex flex-col md:gap-10 gap-6 items-center">
            <BlurFade delay={0.25} inView>
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Kadın Sağlığı ve Tüp Bebek Tedavisinde {" "}
                <span className="text-purple-600 dark:text-white">Uzman Yaklaşım.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <p className="m-auto text-center max-w-2xl text-gray-700 dark:text-gray-300">
                "Kadın sağlığı ve tüp bebek tedavisi konularında yılların tecrübesi ve uzman yaklaşımıyla yanınızdayız. Sağlıklı bir gelecek için sizinle birlikte çalışıyoruz."
              </p>
            </BlurFade>
            <BlurFade delay={0.75} inView>
              <Image
                className="z-10 rounded-lg shadow-lg mx-auto"
                src="/images/1.png"
                alt="Doç. Dr. Arzu Yurci"
                width={400}
                height={400}
              />
            </BlurFade>
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={`-z-10 ${cn("[mask-image:linear-gradient(to_top,white,transparent,transparent)]",)}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection