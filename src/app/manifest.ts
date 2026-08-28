import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luminal Tarot ✶ Larissa Astrologia & Tarot",
    short_name: "Luminal Tarot",
    description:
      "Ferramentas simbólicas de percepção e direcionamento para revelar o invisível e destravar seus caminhos. Leituras de Tarot e Astrologia com Larissa.",
    start_url: "/",
    display: "standalone",
    background_color: "#141416",
    theme_color: "#141416",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
