import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const expertiseAreas = [
  {
    title: "Yapay Zeka Asistanları",
    description:
      "WhatsApp, Instagram, web ve CRM temas noktalarında çalışan; bilgiye erişen, cevaplayan ve yönlendiren AI asistan kurguları geliştiriyorum.",
  },
  {
    title: "CRM Entegrasyonları",
    description:
      "HubSpot merkezli veri akışları, lead yönetimi, anket otomasyonları ve temas takibini sistematik hale getiren entegrasyonlar kuruyorum.",
  },
  {
    title: "Pazarlama ve Satış Entegrasyonları",
    description:
      "Pazarlama, satış ve müşteri deneyimi verilerini aynı çerçevede ele alarak daha ölçülebilir ve daha hızlı aksiyon alınabilen yapılar tasarlıyorum.",
  },
  {
    title: "Akıllı Süreç Yönetimi",
    description:
      "Tekrarlayan iş akışlarını otomasyona devreden, veriyle beslenen ve kurum içinde görünür bir operasyon mantığı oluşturan sistemler kuruyorum.",
  },
];

const collaborationPoints = [
  "AI danışmanlığı ve ihtiyaç analizi",
  "CRM / HubSpot mimari kurulum ve entegrasyonları",
  
  "Agentic RAG ve LLM implementation",
  "Misafir deneyimi ve iletişim otomasyonu",
];

const experienceItems = [
  {
    period: "2024 - Bugün",
    role: "Founder & AI Architect",
    company: "AIHotelsTech",
    description:
      "AI destekli misafir deneyimi, CRM otomasyonu, Agentic RAG ve operasyonel veri ürünleri geliştiriyorum. Özellikle turizm ve deneyim odaklı yapılarda AI'ın doğrudan sürecin içine yerleşmesine odaklanıyorum.",
  },
  {
    period: "2024 - Bugün",
    role: "CRM & Dijital Dönüşüm Lideri",
    company: "Long Beach Resorts",
    description:
      "CRM süreçleri, otomasyon altyapısı, AI asistan kurguları ve dijital iş akışları üzerine danışmanlık veriyorum. Veri akışı, segmentasyon ve iletişim mimarisi tarafını birlikte ele alıyorum.",
  },
  {
    period: "2021 - 2024",
    role: "CRM & Misafir Deneyimi Müdürü",
    company: "AKKA Hotels",
    description:
      "HubSpot, veri tekilleştirme, anket otomasyonları, omnichannel iletişim ve deneyim haritalama projelerini yönettim. Misafir deneyimini veriyle okuyup sürece çeviren yapılar kurdum.",
  },
  {
    period: "2012 - 2021",
    role: "Satış Analitiği & Ticari Pazarlama",
    company: "Levent Kimya",
    description:
      "Veri analitiği, forecast, kategori yönetimi, ticari pazarlama ve karar destek sistemleri tarafında çalıştım. Analitik bakışı iş sonuçlarıyla ve yönetsel kararlarla birleştirdim.",
  },
];

const credentialsColumns = [
  {
    title: "Teknik Yetkinlikler",
    items: [
      "Agentic RAG, LLM ve AI asistan kurguları",
      "Python, FastAPI, API ve webhook entegrasyonları",
      "HubSpot, n8n ve CRM otomasyonları",
      "Power BI, ETL, veri akışları ve raporlama sistemleri",
      "Qdrant, vektör veritabanı ve bilgi katmanı tasarımı",
    ],
  },
  {
    title: "Yönetsel Yetkinlikler",
    items: [
      "CRM stratejisi ve dijital dönüşüm planlaması",
      "Misafir deneyimi ve iletişim süreç tasarımı",
      "Pazarlama, segmentasyon ve kampanya kurguları",
      "Operasyonel süreç analizi ve otomasyon yaklaşımı",
      "Turquality, sunum yönetimi ve karar destek bakışı",
    ],
  },
  {
    title: "Eğitim & Sertifikalar",
    items: [
      "MBA, İşletme Yönetimi",
      "Fundamentals of Deep Learning - NVIDIA",
      "Qdrant Essentials Certification",
      "Google Generative AI Learning Path",
      "DeepLearning.AI Prompt Engineering",
    ],
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
    <div className="max-w-4xl">
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
            <div className="relative z-[1] max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-white/88 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
                CRM & Digital Transformation | AI Strategy Architect
              </div>

              <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)] sm:text-5xl lg:text-7xl">
                Murat Kara
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                15 yıllık CRM ve veri stratejisi tecrübemle; kurumların ihtiyaçlarını analiz eden, uçtan uca AI mimarisini kurgulayan ve otonom süreçleri hayata geçiren bir AI Architect & Strategy Lead'im.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                Danışmanlık | Proje Bazlı Çalışma | İş Birliği Modeli 
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text-subtle)]">
                
              </p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Papatya Dental İçin İş Birliği Teklifi
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
                  AI CONSULTANT 
                  <br />
                  AI ENGİNEER 
                  <br /> CRM  <br />Digital Transformation
                </h2>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                <p>
                  CRM, LLM, Agentic RAG, Otomasyon, Veri Stratejisi ve Misafir
                  deneyimi ekseninde çalışan bir AI danışmanı, AI mimarı ve AI
                  engineer.
                </p>
                <p>
                  Danışmanlık, proje bazlı çözüm ortaklığı ve
                  eğitim/dönüşüm programlarıyla kurumların AI destekli operasyonel
                  dönüşüm yolculuğuna eşlik ediyorum.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  className="contact-row"
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/murat-k-18086b99
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
                  href={contactLinks.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  aihotelstech.com
                  <ArrowUpRightIcon />
                </a>
              </div>
            </aside>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <Reveal className="proposal-card">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Papatya Dental"
                title="İş Birliği Teklifi"
              />
              <p className="section-copy mt-5">
                Papatya Dental tarafında kurulabilecek yapı; AI destekli
                iletişim, CRM entegrasyonları, bilgiye dayalı asistanlar ve
                otomasyonla güçlenen operasyon katmanını birlikte ele alan bir iş
                birliği modelidir.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {collaborationPoints.map((item) => (
                  <li key={item} className="collaboration-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="illustration-card">
              <Image
                src="/ai-system.png"
                alt="AI system diyagramı"
                width={1200}
                height={675}
                className="section-illustration"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Profil" title="Uzmanlık Alanları" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="illustration-card">
            <Image
              src="/ai-engineer.png"
              alt="AI engineer diyagramı"
              width={1343}
              height={503}
              className="section-illustration"
            />
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {expertiseAreas.map((item) => (
              <StaggerItem key={item.title}>
                <article className="info-card h-full">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-copy">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
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
        <SectionHeading
          eyebrow="Yetkinlikler"
          title="Teknik, Yönetsel ve Akademik Altyapı"
        />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {credentialsColumns.map((column) => (
            <StaggerItem key={column.title}>
              <article className="info-card h-full">
                <h3 className="card-title">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-[var(--text-soft)]"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent-strong)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
