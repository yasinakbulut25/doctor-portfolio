import BlurFade from "@/components/ui/blur-fade";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { StethoscopeIcon } from "@/icons/StethoscopeIcon";

function SectionTitle({ title, description, subTitle, icon }) {
  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col items-center gap-2 mb-8">
        {subTitle && (
          <AnimatedGradientText className="flex items-center gap-2">
            {icon ? (
              icon
            ) : (
              <StethoscopeIcon className="w-4 h-4" color="#9c40ff" />
            )}
            <span className="text-purple-600">{subTitle}</span>
          </AnimatedGradientText>
        )}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">
          {title}
        </h2>
        <p className="w-full text-center text-pretty text-sm text-slate-600">
          {description}
        </p>
      </div>
    </BlurFade>
  );
}

export default SectionTitle;
