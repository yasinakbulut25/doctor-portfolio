"use client";

import { useState } from "react";
import { BellIcon } from "@/icons";
import SectionTitle from "./SectionTitle";
import { BorderBeam } from "@/components/ui/border-beam";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import SubmitButton from "@/components/form/SubmitButton";
import BlurFade from "@/components/ui/blur-fade";

function ContactSection() {
  const initialStates = {
    email: "",
    title: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialStates);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="mt-12" id="iletisim">
      <SectionTitle
        title="Bana Ulaşın"
        subTitle="İletişim"
        description="Sorularınız veya önerileriniz için benimle iletişime geçin."
        icon={<BellIcon className="w-4 h-4" color="#9c40ff" />}
      />
      <div className="relative max-w-7xl mx-auto bg-white grid md:grid-cols-2 items-center md px-8 py-12 rounded-2xl sshadow-lg gap-4 mt-4">
        <BlurFade delay={0.5} inView>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="w-full flex flex-col gap-6 mx-auto">
              <InputField
                type="email"
                label="Mail Adresiniz"
                placeholder="Mail adresinizi yazınız.."
                isRequired
                maxLength={300}
                onChange={handleChange("email")}
                errorMessage="Mail adresi boş bırakılamaz."
              />
              <InputField
                type="text"
                label="Konu Başlığı"
                placeholder="Konu başlığını yazınız.."
                isRequired
                maxLength={300}
                onChange={handleChange("title")}
                errorMessage="Konu başlığı boş bırakılamaz."
              />
              <TextAreaField
                label="Mesajınız"
                isRequired
                placeholder="Mesajınızı yazınız.."
                onChange={handleChange("message")}
                errorMessage="Mesaj boş bırakılamaz."
              />

              <SubmitButton>Gönder</SubmitButton>
            </div>
          </form>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <iframe
            className="rounded-xl w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.7690879596917!2d28.845767779543188!3d40.99514737265737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5ed3aa32d1f%3A0x5a0692430ad7e86f!2sDo%C3%A7%20Dr%20Arzu%20Yurci!5e0!3m2!1sen!2str!4v1735751131580!5m2!1sen!2str"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </BlurFade>
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
