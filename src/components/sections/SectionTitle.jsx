import BlurFade from "@/components/ui/blur-fade";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { StethoscopeIcon } from "@/icons/StethoscopeIcon";
import { getSections } from "@/api/endpoints";

async function SectionTitle({ icon, sectionKey }) {
  const getData = getSections();
  const data = await Promise.resolve(getData);
  const section = data.find((section) => section.sectionKey === sectionKey);
  if (!data || !section) return;

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col items-center gap-2 mb-8">
        {section.sectionSubtitle && (
          <AnimatedGradientText className="flex items-center gap-2">
            {icon ? (
              icon
            ) : (
              <StethoscopeIcon className="w-4 h-4" color="#9c40ff" />
            )}
            <span className="text-purple-600">{section.sectionSubtitle}</span>
          </AnimatedGradientText>
        )}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">
          {section.sectionTitle}
        </h2>
        <p className="w-full text-center text-pretty text-sm text-slate-600">
          {section.sectionDescription}
        </p>
      </div>
    </BlurFade>
  );
}

export default SectionTitle;
