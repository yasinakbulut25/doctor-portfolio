import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { QuestionCircleIcon } from "@/icons";
import BlurFade from "@/components/ui/blur-fade";

function FaqsSection() {
  const faqs = [
    {
      question: "Randevu almak için ne yapmalıyım?",
      answer:
        "Randevu almak için web sitemizdeki randevu formunu doldurabilir veya telefon numaramızdan bizi arayabilirsiniz.",
    },
    {
      question: "Hangi hizmetleri sunuyorsunuz?",
      answer:
        "Kadın sağlığı, doğum, rutin kontroller ve özel danışmanlık hizmetleri sunuyoruz. Detaylı bilgi için hizmetlerimiz sayfasını ziyaret edebilirsiniz.",
    },
    {
      question: "Muayene ücretleriniz ne kadar?",
      answer:
        "Ücretlerimiz yapılacak işlemlere göre değişiklik göstermektedir. Detaylı bilgi için lütfen bizimle iletişime geçin.",
    },
    {
      question: "İptal veya değişiklik yapmak için nasıl bir yol izlemeliyim?",
      answer:
        "Randevunuzu iptal etmek veya değiştirmek için en az 24 saat önceden bizimle iletişime geçmeniz gerekmektedir.",
    },
  ];

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
            {faqs.map((faq, index) => (
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
