import React from "react";
import Blogs from "../yazilar/page";

function BlogDetail() {
  return (
    <>
      <div className="mx-auto w-full max-w-3xl px-4 mb-12">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              8 Ocak, 2025
            </time>
          </p>
          <h1 className="mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-4xl">
            Kadın Sağlığı: Menopoz Döneminde Dikkat Edilmesi Gerekenler
          </h1>
          <img
            src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
            alt="Sağlıklı yaşam görseli"
            width={800}
            height={400}
          />
        </div>
        <div className="article-content">
          <p>
            Menopoz, her kadının hayatında doğal bir süreçtir. Ancak, bu dönemi
            sağlıklı ve huzurlu bir şekilde geçirmek için dikkat edilmesi
            gereken bazı önemli noktalar bulunmaktadır. Bu yazıda, menopoz
            dönemindeki kadınlar için faydalı bilgiler ve pratik öneriler
            sunacağız.
          </p>
          <h2>Menopoz Döneminde Karşılaşılan Yaygın Belirtiler</h2>
          <ul>
            <li>Sıcak basmaları</li>
            <li>Uyku sorunları</li>
            <li>Duygusal dalgalanmalar</li>
            <li>Kemik yoğunluğunda azalma</li>
            <li>Ciltte kuruluk</li>
          </ul>
          <h2>Sağlıklı Bir Menopoz İçin Öneriler</h2>
          <p>
            Menopoz dönemi belirtileriyle başa çıkmak için aşağıdaki önerilere
            dikkat edebilirsiniz:
          </p>
          <ol>
            <li>
              <strong>Sağlıklı Beslenme:</strong> Kalsiyum ve D vitamini
              açısından zengin bir diyet tercih edin. Süt ürünleri, yeşil
              yapraklı sebzeler ve balık tüketmek faydalıdır.
            </li>
            <li>
              <strong>Egzersiz:</strong> Düzenli egzersiz, hem fiziksel hem de
              ruhsal sağlığınıza katkı sağlar. Haftada en az 3 gün tempolu
              yürüyüş yapmayı hedefleyin.
            </li>
            <li>
              <strong>Stres Yönetimi:</strong> Yoga, meditasyon veya nefes
              egzersizleriyle stresi azaltabilirsiniz.
            </li>
            <li>
              <strong>Hormon Tedavisi:</strong> Doktorunuzun önerisiyle hormon
              tedavisi düşünülebilir.
            </li>
          </ol>
          <h2>Menopozda Doğru Beslenme İçin Örnek Tablo</h2>
          <table>
            <thead>
              <tr>
                <th>Gıda Grubu</th>
                <th>Örnek Besinler</th>
                <th>Faydaları</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Süt Ürünleri</td>
                <td>Süt, yoğurt, peynir</td>
                <td>Kemik sağlığını destekler</td>
              </tr>
              <tr>
                <td>Yeşil Sebzeler</td>
                <td>Ispanak, brokoli, lahana</td>
                <td>Vitamin ve mineral sağlar</td>
              </tr>
              <tr>
                <td>Omega-3 Kaynakları</td>
                <td>Somon, ceviz, chia tohumu</td>
                <td>Kalp sağlığını korur</td>
              </tr>
            </tbody>
          </table>
          <h2>Uzman Desteği Almanın Önemi</h2>
          <p>
            Menopoz sürecinde, bir uzmandan destek almak büyük önem taşır.
            Kişiye özel bir yaklaşım ile, belirtiler daha kolay yönetilebilir ve
            yaşam kalitesi artırılabilir. <a href="#">Bize ulaşarak</a> daha
            fazla bilgi alabilirsiniz.
          </p>
          <h2>Doğal Destekleyiciler</h2>
          <p>Bitkisel desteklerden yararlanmak isteyenler için öneriler:</p>
          <ul>
            <li>Gece çuha çiçeği yağı</li>
            <li>Rezene çayı</li>
            <li>Soya ürünleri</li>
          </ul>
          <h2>Menopozda Kendinize Zaman Ayırın</h2>
          <p>
            Bu dönemi daha keyifli hale getirmek için hobiler edinin,
            arkadaşlarınızla vakit geçirin ve bol bol doğada zaman geçirin.
            Kendinizi iyi hissettiğiniz aktivitelerle uğraşmak, menopoz sürecini
            daha rahat geçirmenizi sağlayacaktır.
          </p>
          <h2>Sonuç</h2>
          <p>
            Menopoz, her kadın için özel bir süreçtir. Sağlıklı bir yaşam tarzı
            benimseyerek, bu dönemi hem fiziksel hem de ruhsal açıdan güçlü bir
            şekilde geçirebilirsiniz. Sorularınız için{" "}
            <a href="#">bizimle iletişime geçebilirsiniz</a>.
          </p>
        </div>
      </div>

      <Blogs isDetailPage={true} />
    </>
  );
}

export default BlogDetail;
