import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const transformationAreas = [
  {
    title: "Lead ve Hasta İletişimi Otomasyonu",
    description:
      "WhatsApp, form ve sosyal medya temaslarını tek bir akışta toplayan; hız, tutarlılık ve ölçülebilir dönüşüm sağlayan AI destekli iletişim sistemi.",
    points: [
      "İlk temas, randevu yönlendirme ve geri dönüş süreçlerinde operasyonel yükün azalması",
      "Potansiyel hastaların cevap bekleme süresinin kısalması",
      "Segment bazlı takip ve yeniden temas kurgularının netleşmesi",
    ],
  },
  {
    title: "n8n / HubSpot Süreç Mimarisi",
    description:
      "Papatya Dental içindeki veri akışlarını, formları ve CRM süreçlerini tek merkezde toplayan, sürdürülebilir ve faturalandırılabilir bir otomasyon omurgası.",
    points: [
      "Lead kaynağından teklif takibine kadar uçtan uca entegrasyon",
      "Tekrarlayan manuel operasyonların otomasyona devredilmesi",
      "Yönetim için görünür ve geliştirilebilir bir AI operasyon altyapısı",
    ],
  },
  {
    title: "Agentic RAG ile Hasta Deneyimi",
    description:
      "Sadece chatbot değil; kurum bilgisini kullanan, doğru cevap verebilen ve farklı senaryolarda yönlendirme yapabilen agentic bilgi katmanı.",
    points: [
      "Tedavi, süreç ve hizmet sorularında daha kontrollü bilgi aktarımı",
      "Sık sorulan soruların markaya uygun bir sesle yanıtlanması",
      "İçerik, bilgi tabanı ve operasyon ekipleri arasında ortak bir AI hafızası",
    ],
  },
];

const proofCards = [
  {
    title: "Maris AI Asistanı",
    subtitle: "WhatsApp & Instagram otonom çoklu ajan sistemi",
    description:
      "Çok kanallı talepleri merkezi mantıkla yöneten, cevaplayan ve ilgili iş akışlarına bağlayan agent tabanlı asistan kurgusu.",
  },
  {
    title: "AI Smart Map",
    subtitle: "Navigasyon ve keşif deneyimi",
    description:
      "Kullanıcıyı doğru içeriğe, lokasyona ve keşif akışına taşıyan dijital deneyim ürünü; bilgi mimarisi ile kullanım kolaylığını birleştirir.",
  },
  {
    title: "Dinamik Veri Pipeline",
    subtitle: "Power BI Data Lakehouse & ETL süreçleri",
    description:
      "Farklı kaynaklardan gelen operasyonel veriyi temiz, izlenebilir ve raporlanabilir hâle getiren analitik omurga.",
  },
];

const technicalStrengths = [
  "Fundamentals of Deep Learning – NVIDIA",
  "Qdrant Essentials Certification",
  "Python ve FastAPI ile üretim odaklı servis geliştirme",
  "LLM, RAG ve agentic iş akışı tasarımı",
  "HubSpot, n8n, API ve webhook otomasyonları",
  "Power BI, ETL ve veri ürünleri düşüncesi",
];

const trustSignals = [
  {
    label: "20 yıllık stratejik veri ve ticari süreç perspektifi",
    detail:
      "Veri analitiği, CRM, ticari pazarlama ve dijital süreç yönetimini yalnızca teknik değil, operasyonel değer tarafından okuyan bir geçmiş.",
  },
  {
    label: "Turizm ve deneyim tasarımında sahadan gelen tecrübe",
    detail:
      "Misafir deneyimi, CRM mimarisi, anket otomasyonu ve çok kanallı iletişim akışlarını gerçek operasyon içinde kurup yönettim.",
  },
  {
    label: "AI mimarisini iş hedeflerine bağlayan yaklaşım",
    detail:
      "Amacım demo üretmek değil; faturalandırılabilir, ölçülebilir ve ekibin benimseyebileceği AI sistemleri kurmak.",
  },
];

const contactLinks = {
  whatsapp: "https://wa.me/905544315194",
  linkedin: "https://linkedin.com/in/murat-k-18086b99",
  email: "mailto:markokara@hotmail.com",
};

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <div className="grid-overlay" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <Reveal className="surface-panel flex flex-col gap-10 px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
                AI Solution Partner & Architect
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-5xl lg:text-7xl">
                Papatya Dental İçin AI Destekli Operasyonel Dönüşüm Vizyonu
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                20 Yıllık Stratejik Veri Tecrübesi, Otonom Yapay Zeka
                Sistemleriyle Buluşuyor.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                Murat Kara olarak hedefim klasik bir iş başvurusu sunmak değil;
                Papatya Dental için dışarıdan çalışan, stratejik ve
                faturalandırılabilir bir AI danışmanlık partneri gibi konumlanmak.
                Odak noktam; müşteri yolculuğu, süreç mimarisi ve AI destekli
                operasyon tasarımını tek çatı altında birleştirmek.
              </p>
            </div>

            <div className="hero-aside max-w-md">
              <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.92))] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-faint)] text-xl font-bold text-[var(--accent-strong)]">
                    MK
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-subtle)]">
                      Danışman Profili
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--text-strong)]">
                      Murat Kara
                    </h2>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm leading-6 text-[var(--text-soft)]">
                  <p>
                    CRM, veri ürünleri, AI otomasyonları ve müşteri deneyimi
                    süreçlerini iş hedeflerine bağlayan hibrit çözüm mimarı.
                  </p>
                  <p>
                    Antalya merkezli. HubSpot, n8n, LLM, RAG ve operasyonel veri
                    tasarımı ekseninde dış kaynaklı stratejik partnerlik modeli.
                  </p>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    className="cta-primary"
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bu vizyonu konuşalım
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    className="cta-secondary"
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn profili
                    <ArrowUpRightIcon />
                  </a>
                </div>
                <a
                  className="mt-4 inline-flex text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--accent-strong)]"
                  href={contactLinks.email}
                >
                  markokara@hotmail.com
                </a>
              </div>
            </div>
          </div>

          <Stagger className="grid gap-4 lg:grid-cols-3">
            {[
              "Dışarıdan danışman / solution partner modeli",
              "Abartısız, kurumsal ve güven veren AI teklif dili",
              "CV değil; karar vericiye yönelik net proposal yapısı",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/78 px-5 py-5 text-sm leading-6 text-[var(--text-soft)] shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <Reveal className="proposal-card">
          <SectionHeading
            eyebrow="Stratejik Teklif"
            title="Kod yazan biri değil, AI dönüşümünü kurum içine yerleştiren bir partner."
            description="Bu bölüm, Papatya Dental için önerdiğim çalışma modelinin özünü anlatır: teknoloji seçimi, süreç mimarisi ve deneyim tasarımı tek paket hâlinde ilerler."
          />
          <div className="mt-8 rounded-[2rem] border border-[var(--line-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(224,242,254,0.9))] p-7 shadow-[0_24px_60px_rgba(37,99,235,0.08)] sm:p-8">
            <p className="max-w-4xl text-lg leading-8 text-[var(--text-strong)]">
              Amacım sadece kod yazmak değil; Papatya Dental bünyesinde uçtan
              uca AI mimarisini kurmak, n8n/HubSpot entegrasyonlarını
              otonomlaştırmak ve misafir deneyimini Agentic RAG sistemleriyle
              zirveye taşımaktır.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Operasyonel Dönüşüm Alanları"
          title="Papatya Dental için öncelikli üç AI çalışma alanı"
          description="İlk fazda önerdiğim yapı, kısa vadede görünür kazanım üreten ama orta vadede de kurumsal AI omurgasına dönüşebilen bir çerçeve sunar."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {transformationAreas.map((area) => (
            <StaggerItem key={area.title}>
              <article className="info-card h-full">
                <h3 className="card-title">{area.title}</h3>
                <p className="card-copy">{area.description}</p>
                <ul className="mt-6 space-y-3">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-[var(--text-soft)]"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent-strong)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Canlı Kanıtlar"
          title="Düşünce değil, uygulanmış sistemlerden gelen referanslar"
          description="Buradaki örnekler, önerdiğim yaklaşımın yalnızca teorik değil; sahada denenmiş ve farklı bağlamlarda çalıştırılmış olduğunu gösterir."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {proofCards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="info-card h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  Referans Proje
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--text-subtle)]">
                  {card.subtitle}
                </p>
                <p className="mt-5 text-sm leading-7 text-[var(--text-soft)]">
                  {card.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-panel px-6 py-7 sm:px-8 sm:py-8">
            <SectionHeading
              eyebrow="Teknik Güç"
              title="AI mimarisini taşıyacak teknik zemine sahibim"
              description="Yetkinliklerimi araç listesi olarak değil; üretime çıkabilecek sistem kurma becerisi olarak konumluyorum."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {technicalStrengths.map((item) => (
                <div key={item} className="tag-card">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="surface-panel px-6 py-7 sm:px-8 sm:py-8" delay={0.08}>
            <p className="section-eyebrow">İletişim ve Erişim</p>
            <h2 className="section-title">
              Dış kaynaklı ama kurumla aynı hedefe hizalanmış çalışma modeli
            </h2>
            <div className="mt-7 space-y-4 text-sm leading-7 text-[var(--text-soft)]">
              <p>
                Antalya merkezli çalışıyorum. Gerektiğinde danışman, çözüm
                mimarı veya fatura kesen AI partner şirket modeliyle
                konumlanabilirim.
              </p>
              <p>
                Papatya Dental için önceliğim; kısa sürede görünür değer üretmek,
                sonra bu yapıyı sürdürülebilir AI operasyon modeline
                dönüştürmektir.
              </p>
            </div>
            <div className="mt-8 space-y-3 text-sm text-[var(--text-soft)]">
              <a className="contact-row" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp üzerinden hızlı görüşme
                <ArrowUpRightIcon />
              </a>
              <a className="contact-row" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn üzerinden profesyonel profil
                <ArrowUpRightIcon />
              </a>
              <a className="contact-row" href={contactLinks.email}>
                E-posta ile doğrudan iletişim
                <ArrowUpRightIcon />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Güven Bölümü"
          title="Geçmişten gelen güven, bugüne taşınan yeni beceri"
          description="Bu sayfa bir CV değil; yine de karar vericinin görmek isteyeceği güven unsurlarını net biçimde görünür bırakır."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <StaggerItem key={signal.label}>
              <article className="info-card h-full">
                <h3 className="card-title">{signal.label}</h3>
                <p className="card-copy mt-4">{signal.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-12">
        <Reveal className="final-cta">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Son Adım</p>
            <h2 className="section-title">
              Eğer hedefiniz AI ile daha ölçülebilir, daha hızlı ve daha
              kurumsal bir operasyon kurmaksa, bu vizyonu birlikte konuşabiliriz.
            </h2>
            <p className="section-copy mt-5">
              Papatya Dental için önerim; küçük ama etkili bir pilot ile başlamak
              ve ardından CRM, otomasyon ve bilgi katmanını aşamalı biçimde
              büyütmek.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="cta-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile görüşme başlat
              <ArrowUpRightIcon />
            </a>
            <a
              className="cta-secondary"
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profilini incele
              <ArrowUpRightIcon />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
