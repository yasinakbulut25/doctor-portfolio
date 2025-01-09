import { BellIcon } from "@/icons";
import SectionTitle from "./SectionTitle";
import { BorderBeam } from "@/components/ui/border-beam";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";
import { getUser } from "@/api/endpoints";

async function ContactSection() {
  const data = await getUser();
  if (!data) return;

  const { map } = data.admin;
  return (
    <section className="mb-12 px-4" id="iletisim">
      <SectionTitle
        title="Bana Ulaşın"
        subTitle="İletişim"
        description="Sorularınız veya önerileriniz için benimle iletişime geçin."
        icon={<BellIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="relative max-w-7xl mx-auto bg-white md px-8 py-12 rounded-2xl mt-4">
        <ContactForm map={map} />
        <ContactBoxes />
        <BorderBeam
          colorFrom="#9c40ff"
          colorTo="#c084fc"
          size={300}
          duration={10}
          delay={9}
        />
      </div>
    </section>
  );
}

export default ContactSection;
