import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const profileHighlights = [
  {
    title: "20 yıllık tecrübe",
    description:
      "Veri analitiği, CRM, ticari pazarlama, misafir deneyimi ve dijital dönüşüm tarafında farklı sektörlerde çalıştım.",
  },
  {
    title: "AIHotelsTech kurucusu",
    description:
      "AIHotelsTech ile AI mimarisi, agentic sistemler, CRM otomasyonları ve veri odaklı deneyim kurguları geliştiriyorum.",
  },
  {
    title: "AI architect & engineer",
    description:
      "Strateji kurabilen, sistemi tasarlayan, entegrasyonu yapan ve üretime taşıyan taraftayım.",
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
      "İhtiyaç analizi, yol haritası, önceliklendirme ve AI kullanım senaryoları tarafında stratejik destek verebilirim.",
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
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
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
                CRM & Digital Transformation | AI Strategy Architect
              </div>

              <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)] sm:text-5xl lg:text-7xl">
                Murat Kara
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                CRM, dijital dönüşüm, AI stratejisi, Agentic RAG ve LLM
                implementation tarafında çalışan; problemi analiz edip sistemi
                kurabilen bir AI architect ve AI engineer’ım.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                20 yıllık veri, CRM, ticari süreç, pazarlama ve misafir deneyimi
                tecrübemi bugün AIHotelsTech çatısı altında AI danışmanlığı,
                mimari kurulum ve operasyonel otomasyon projelerine taşıyorum.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text-subtle)]">
                Data Strategy | Agentic RAG & LLM Implementation | Marketing |
                Guest Experience | HubSpot | BI | Turquality | Founder of
                AIHotelsTech
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
                  src="/murat-kara.jpg"
                  alt="Murat Kara"
                  width={520}
                  height={520}
                  className="profile-photo"
                  sizes="(max-width: 640px) 184px, 220px"
                  priority
                />
              </div>

              <div className="mt-6">
                <p className="profile-label">Profil</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Founder of AIHotelsTech
                </h2>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                <p>
                  CRM, LLM, Agentic RAG, otomasyon, veri stratejisi ve misafir
                  deneyimi ekseninde problem çözen AI danışmanı, mimarı ve
                  engineer.
                </p>
                <p>
                  Antalya merkezli. Danışmanlık, proje bazlı çözüm ortaklığı ve
                  dış kaynaklı AI yapılanması modelleriyle çalışabilirim.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  className="contact-row"
                  href={contactLinks.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  aihotelstech.com
                  <ArrowUpRightIcon />
                </a>
                <a
                  className="contact-row"
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  +90 554 431 51 94
                  <ArrowUpRightIcon />
                </a>
                <a
                  className="contact-row"
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/murat-k-18086b99
                  <ArrowUpRightIcon />
                </a>
              </div>
            </aside>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Profil" title="Uzmanlık Alanları" />
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
        <SectionHeading eyebrow="Profesyonel Geçmiş" title="Deneyim" />
        <Stagger className="mt-8 grid gap-4">
          {experienceItems.map((item) => (
            <StaggerItem key={`${item.company}-${item.role}`}>
              <article className="experience-row">
                <div className="experience-period">{item.period}</div>
                <div>
                  <h3 className="card-title">
                    {item.role}{" "}
                    <span className="text-[var(--text-subtle)]">
                      @ {item.company}
                    </span>
                  </h3>
                  <p className="card-copy mt-3">{item.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Projeler" title="Seçilmiş İşler" />
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
        <SectionHeading eyebrow="Çalışma Modelleri" title="Çalışma Biçimleri" />
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <Reveal className="cta-strip">
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
            LinkedIn profilini açın
            <ArrowUpRightIcon />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
