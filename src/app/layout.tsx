import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Larissa ✶ Astrologia & Tarot | Leituras online",
    template: "%s | Larissa ✶ Astrologia & Tarot",
  },
  description:
    "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos. Leituras de Tarot e Astrologia com Larissa — estudo sério, entrega online.",
  keywords: [
    "astrologia",
    "tarot",
    "mapa astral",
    "leitura de tarot",
    "revolução solar",
    "sinastria",
    "astrocartografia",
    "tarô online",
    "luminal tarot",
    "Larissa astrologia",
  ],
  authors: [{ name: "Larissa", url: siteUrl }],
  creator: "Larissa ✶ Astrologia & Tarot",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Larissa ✶ Astrologia & Tarot",
    title: "Larissa ✶ Astrologia & Tarot | Leituras online",
    description:
      "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Larissa ✶ Astrologia & Tarot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Larissa ✶ Astrologia & Tarot",
    description:
      "Leituras de Tarot e Astrologia com estudo sério e entrega online.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
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
