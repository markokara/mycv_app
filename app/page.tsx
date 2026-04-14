import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const profileHighlights = [
  {
    title: "20 yıllık iş tecrübesi",
    description:
      "Veri analitiği, CRM, ticari pazarlama, müşteri deneyimi ve dijital dönüşüm tarafında farklı sektörlerde çalıştım.",
  },
  {
    title: "AIHotelsTech kurucusu",
    description:
      "AIHotelsTech ile AI mimarisi, agentic sistemler, CRM otomasyonları ve veri odaklı deneyim kurguları geliştiriyorum.",
  },
  {
    title: "AI architect + AI engineer",
    description:
      "Strateji seviyesinde düşünebilen ama gerektiğinde sistemi kuran, entegrasyonu yapan ve üretime taşıyan taraftayım.",
  },
];

const experienceItems = [
  {
    period: "2024 - Bugün",
    role: "Founder & AI Architect",
    company: "AIHotelsTech",
    description:
      "AI destekli misafir deneyimi, CRM otomasyonu, Agentic RAG ve operasyonel veri ürünleri geliştiriyorum.",
  },
  {
    period: "2024 - Bugün",
    role: "CRM & Dijital Dönüşüm Lideri",
    company: "Long Beach Resorts",
    description:
      "CRM süreçleri, otomasyon altyapısı, AI asistan kurguları ve dijital iş akışları üzerine danışmanlık veriyorum.",
  },
  {
    period: "2021 - 2024",
    role: "CRM & Misafir Deneyimi Müdürü",
    company: "AKKA Hotels",
    description:
      "HubSpot, veri tekilleştirme, anket otomasyonları, omnichannel iletişim ve deneyim haritalama projelerini yönettim.",
  },
  {
    period: "2012 - 2021",
    role: "Satış Analitiği & Ticari Pazarlama",
    company: "Levent Kimya",
    description:
      "Veri, forecast, ticari pazarlama ve karar destek sistemleri tarafında analitik bakışı iş sonuçlarına bağladım.",
  },
];

const proofCards = [
  {
    title: "Maris AI Asistanı",
    subtitle: "WhatsApp & Instagram çoklu ajan sistemi",
    description:
      "Çok kanallı talepleri yöneten, cevaplayan ve operasyon akışlarına bağlanan otonom AI asistan kurgusu.",
  },
  {
    title: "AI Smart Map",
    subtitle: "Navigasyon ve keşif uygulaması",
    description:
      "Kullanıcıyı doğru deneyime, lokasyona ve bilgiye yönlendiren dijital keşif ürünü.",
  },
  {
    title: "Dinamik Veri Pipeline",
    subtitle: "Power BI Data Lakehouse & ETL",
    description:
      "Farklı kaynaklardaki veriyi birleştirip izlenebilir, raporlanabilir ve karar alınabilir yapıya taşıyan analitik omurga.",
  },
];

const workModels = [
  {
    title: "AI danışmanlığı",
    description:
      "İhtiyaç analizi, yol haritası, AI kullanım senaryoları ve önceliklendirme tarafında stratejik destek verebilirim.",
  },
  {
    title: "Mimari kurulum",
    description:
      "n8n, HubSpot, API, agentic akışlar, RAG ve veri katmanını doğrudan kurgulayıp kurabilirim.",
  },
  {
    title: "Esnek çalışma modeli",
    description:
      "Danışman, proje bazlı çözüm ortağı veya dış kaynaklı AI partner modeliyle çalışabilirim.",
  },
];

const contactLinks = {
  whatsapp: "https://wa.me/905544315194",
  linkedin: "https://linkedin.com/in/murat-k-18086b99",
  email: "mailto:markokara@hotmail.com",
  website: "https://aihotelstech.com",
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

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6 sm:px-8 lg:px-12">
        <Reveal className="surface-panel px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
                AI Solution Partner / AI Architect / AI Engineer
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)] sm:text-5xl lg:text-7xl">
                Murat Kara
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                Papatya Dental için; AI danışmanlığı, AI mimarisi ve operasyonel
                otomasyon tarafında dışarıdan stratejik çözüm ortağı olarak değer
                üretebilirim.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                20 yıllık veri, CRM, ticari süreç ve dijital dönüşüm tecrübemi;
                bugün AIHotelsTech çatısı altında AI architect ve AI engineer
                bakışıyla birleştiriyorum. Bu sayfa bir klasik iş başvurusu değil;
                kim olduğumu, ne ürettiğimi ve hangi çalışma modeliyle katkı
                sağlayabileceğimi net anlatan kısa bir tanıtımdır.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  className="cta-primary"
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp ile iletişime geçin
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
            </div>

            <aside className="profile-panel">
              <div className="profile-photo-shell">
                <Image
                  src="/portrait-placeholder.svg"
                  alt="Murat Kara portre alanı"
                  width={260}
                  height={260}
                  className="profile-photo"
                  priority
                />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  Profil
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--text-strong)]">
                  Founder, AI danışmanı ve çözüm mimarı
                </h2>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-6 text-[var(--text-soft)]">
                <p>
                  AIHotelsTech kurucusuyum. CRM, LLM, Agentic RAG, otomasyon ve
                  veri ürünleri ekseninde kurumlara çözüm geliştiriyorum.
                </p>
                <p>
                  Antalya merkezliyim. Danışman, proje bazlı partner veya esnek
                  dış kaynak modeliyle çalışabilirim.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a className="contact-row" href={contactLinks.website} target="_blank" rel="noreferrer">
                  aihotelstech.com
                  <ArrowUpRightIcon />
                </a>
                <a className="contact-row" href={contactLinks.email}>
                  markokara@hotmail.com
                  <ArrowUpRightIcon />
                </a>
                <a className="contact-row" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/murat-k-18086b99
                  <ArrowUpRightIcon />
                </a>
              </div>
            </aside>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Kısa Profil"
          title="Ben kimim?"
          description="Veri, CRM, operasyon ve AI katmanını birlikte okuyabilen; strateji ve uygulama tarafında aynı anda çalışabilen bir profesyonelim."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {profileHighlights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="info-card h-full">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <Reveal className="proposal-card">
          <SectionHeading
            eyebrow="Çalışma Niyeti"
            title="Papatya Dental ile klasik bir işe giriş modeli dışında da çalışabiliriz."
            description="Benim için önemli olan unvandan çok ihtiyaç. Doğru modelle, kurumun gerçek problemlerine odaklanıp ölçülebilir bir AI dönüşümü kurabiliriz."
          />
          <div className="mt-8 rounded-[2rem] border border-[var(--line-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(224,242,254,0.9))] p-7 shadow-[0_24px_60px_rgba(37,99,235,0.08)] sm:p-8">
            <p className="max-w-4xl text-lg leading-8 text-[var(--text-strong)]">
              İster danışmanlık, ister proje bazlı çözüm ortaklığı, ister dış
              kaynaklı AI mimarisi modeliyle; Papatya Dental’in ihtiyaçları
              doğrultusunda esnek bir çalışma yapısı kurabiliriz.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Seçilmiş Geçmiş"
          title="Deneyimimin kısa özeti"
          description="Tüm kariyer geçmişini listelemek yerine, bugünkü pozisyonumu açıklayan seçilmiş durakları görünür bırakıyorum."
        />
        <Stagger className="mt-8 grid gap-4">
          {experienceItems.map((item) => (
            <StaggerItem key={`${item.company}-${item.role}`}>
              <article className="experience-row">
                <div className="experience-period">{item.period}</div>
                <div>
                  <h3 className="card-title">
                    {item.role} <span className="text-[var(--text-subtle)]">@ {item.company}</span>
                  </h3>
                  <p className="card-copy mt-3">{item.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Canlı Kanıtlar"
          title="Ürettiğim işlerden seçilmiş örnekler"
          description="Projelerimin ortak noktası; AI’ı doğrudan operasyonun içine yerleştirmek ve somut kullanım senaryosu üretmek."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {proofCards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="info-card h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  Proje
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

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Çalışma Modeli"
          title="Nasıl katkı sağlayabilirim?"
          description="İhtiyaca göre kapsamı değişebilir; ama temel yaklaşımım her zaman kurumun gerçek problemine uygun sistem kurmaktır."
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {workModels.map((item) => (
            <StaggerItem key={item.title}>
              <article className="info-card h-full">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-12">
        <Reveal className="final-cta">
          <div className="max-w-3xl">
            <p className="section-eyebrow">İletişim</p>
            <h2 className="section-title">
              Eğer Papatya Dental için AI tarafında farklı bir çalışma modeli
              düşünüyorsanız, bunu birlikte netleştirebiliriz.
            </h2>
            <p className="section-copy mt-5">
              Benim için mesele sadece bir rol değil; doğru kapsam, doğru model ve
              doğru problem üzerinden birlikte değer üretmek.
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
              LinkedIn profilini aç
              <ArrowUpRightIcon />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
