import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminaltarot.com.br";

export const viewport: Viewport = {
  themeColor: "#faede2",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Larissa ✶ Luminal Tarot & Astrologia | Leituras e Consultas Online",
    template: "%s | Larissa ✶ Luminal Tarot",
  },
  description:
    "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos. Leituras de Tarot e Mapa Astral com Larissa — estudo sério e atendimento 100% online.",
  applicationName: "Luminal Tarot & Astrologia",
  keywords: [
    "luminal tarot",
    "luminaltarot",
    "tarot online",
    "astrologia online",
    "mapa astral natal",
    "leitura de tarot",
    "revolução solar",
    "sinastria amorosa",
    "astrocartografia",
    "templo de afrodite tarot",
    "mesa de relacionamento",
    "Larissa tarot",
    "Larissa astrologia",
    "consulta de tarot whatsapp",
    "previsões tarot",
  ],
  authors: [{ name: "Larissa", url: siteUrl }],
  creator: "Larissa",
  publisher: "Luminal Tarot",
  category: "Astrologia e Tarot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Luminal Tarot ✶ Larissa Astrologia & Tarot",
    title: "Larissa ✶ Luminal Tarot & Astrologia | Leituras e Consultas Online",
    description:
      "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos. Leituras de Tarot e Astrologia 100% online.",
    images: [
      {
        url: "/images/larissa-profile.jpg",
        width: 800,
        height: 800,
        alt: "Larissa ✶ Luminal Tarot & Astrologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luminaltarot",
    creator: "@luminaltarot",
    title: "Larissa ✶ Luminal Tarot & Astrologia | Leituras Online",
    description:
      "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos.",
    images: ["/images/larissa-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Luminal Tarot ✶ Larissa Astrologia & Tarot",
      alternateName: ["Luminal Tarot", "Larissa Astrologia & Tarot"],
      description:
        "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos. Leituras de Tarot e Astrologia online.",
      inLanguage: "pt-BR",
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Luminal Tarot - Larissa Astrologia & Tarot",
      url: siteUrl,
      logo: `${siteUrl}/images/larissa-profile.jpg`,
      image: `${siteUrl}/images/larissa-profile.jpg`,
      telephone: "+55-87-99644-9721",
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      sameAs: [
        "https://instagram.com/luminaltarot",
        "https://tiktok.com/@luminaltarott",
        "https://luminaltarot.substack.com",
      ],
      description:
        "Consultas e leituras personalizadas de Tarot e Astrologia conduzidas por Larissa. Atendimento online via WhatsApp e e-mail.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Tarot e Astrologia",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mapa Astral Natal",
              description: "Estudo completo do seu mapa de nascimento — personalidade, propósito, padrões emocionais, carreira e relacionamentos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revolução Solar",
              description: "Previsão astrológica para o ano que começa no seu aniversário.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Leituras de Tarot",
              description: "Mesa de Relacionamento, Carreira, Templo de Afrodite, Perguntas Objetivas e Previsões.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#larissa`,
      name: "Larissa",
      jobTitle: "Astróloga e Taróloga",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      image: `${siteUrl}/images/larissa-profile.jpg`,
      sameAs: [
        "https://instagram.com/luminaltarot",
        "https://tiktok.com/@luminaltarott",
        "https://luminaltarot.substack.com",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Aplica o tema salvo (claro/escuro) antes da pintura para evitar flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('luminal-theme');if(t!=='dark'&&t!=='light'){t='light';}document.documentElement.dataset.theme=t;if(t==='dark'){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#141416');}}catch(e){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {pixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
