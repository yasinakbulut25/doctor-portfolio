import React from "react";
import SectionTitle from "./SectionTitle";
import { UserIcon } from "@/icons";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";

function AboutSection() {
  return (
    <section className="mt-12" id="hakkimda">
      <SectionTitle
        title="Beni Tanıyın"
        subTitle="Hakkımda"
        description="Hayat hikayem, değerlerim ve profesyonel deneyimlerim hakkında bilgi edinin."
        icon={<UserIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <p className="text-md text-black font-medium mx-auto">
          <span className="block mb-4 text-purple-600 font-bold">Merhaba,</span>
          Ben Doç. Dr. Arzu Yurci, Kadın Sağlığı ve Doğum Uzmanı olarak
          yıllardır siz değerli hastalarımıza hizmet vermekteyim. Tıp eğitimimi
          Tıp Fakültesi’nde tamamladıktan sonra uzmanlık alanımı Kadın
          Hastalıkları ve Doğum üzerine yoğunlaştırdım. Eğitim ve tecrübelerim
          boyunca önceliğim her zaman hastalarımın sağlığı ve mutluluğu oldu.
          <br />
          <br />
          Mesleğimdeki 10 yılı aşkın sürede, binlerce başarılı operasyon, doğum
          ve danışmanlık hizmeti vererek birçok hayatın bir parçası olmanın
          mutluluğunu yaşadım. Hamilelik süreci, doğum ve kadın sağlığına dair
          her adımda size rehberlik etmek için buradayım.
        </p>
        <div className="relative mx-auto rounded-lg overflow-hidden">
          <Image
            className="object-contain w-full h-auto max-h-[350px]"
            src="/images/3.png"
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
      </div>
    </section>
  );
}

export default AboutSection;
