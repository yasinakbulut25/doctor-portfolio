import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { QuestionCircleIcon } from "@/icons";
import BlurFade from "@/components/ui/blur-fade";
import { getQuestions } from "@/api/endpoints";

async function FaqsSection() {
  const getData = getQuestions();
  const data = await Promise.resolve(getData);
  const activeData = data.filter((item) => !item.deleted_at);

  if (!data || !activeData || activeData.length === 0) return;

  return (
    <section className="md:container mx-auto px-4 mb-12" id="sss">
      <SectionTitle
        title="Sıkça Sorulan Sorular"
        subTitle="SSS"
        description="Merak ettiğiniz konularla ilgili sıkça sorulan sorulara göz atın."
        icon={<QuestionCircleIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <BlurFade delay={0.5} inView>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple">
            {activeData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="[&[data-state=open]]:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </BlurFade>
    </section>
  );
}

export default FaqsSection;
