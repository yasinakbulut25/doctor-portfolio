"use client";

import { useState } from "react";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import SubmitButton from "@/components/form/SubmitButton";
import BlurFade from "@/components/ui/blur-fade";

function ContactForm({ map }) {
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
    <div className="grid md:grid-cols-2 gap-4 items-center">
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
      {map && (
        <BlurFade delay={0.5} inView>
          <iframe
            className="rounded-xl w-full h-[400px]"
            src={map}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </BlurFade>
      )}
    </div>
  );
}

export default ContactForm;
