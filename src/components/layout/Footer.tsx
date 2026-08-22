"use client";

import Link from "next/link";
import MoonLogo from "@/components/ui/MoonLogo";

// Instagram SVG
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

// WhatsApp SVG
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Ícone TikTok customizado (Lucide não tem)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.16 8.16 0 0 0 4.77 1.52V7.22a4.85 4.85 0 0 1-1-.53z" />
    </svg>
  );
}

// Ícone Substack customizado
function SubstackIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--carbon-950)",
        borderTop: "1px solid rgba(184, 145, 42, 0.15)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2.5rem) 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "3rem",
          }}
        >
          {/* Coluna 1 — Marca */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <MoonLogo size={28} />
              <div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", color: "var(--paper-100)" }}>
                  larissa
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "var(--gold-400)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  ✶ astrologia & tarot
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--graphite-300)", lineHeight: 1.7, maxWidth: 240 }}>
              Ferramentas simbólicas de percepção e direcionamento para revelar o invisível.
            </p>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "1rem" }}>
              Navegação
            </h3>
            <nav aria-label="Links do rodapé" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Início",       href: "#hero" },
                { label: "Sobre Mim",   href: "#sobre" },
                { label: "Serviços",    href: "#servicos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ",         href: "#faq" },
                { label: "Agendar",     href: "#agendar" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{ fontSize: "0.82rem", color: "var(--graphite-300)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-300)")}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato & Redes */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "1rem" }}>
              Redes & Contato
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://instagram.com/luminaltarot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Larissa"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "var(--graphite-300)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-300)")}
              >
                <InstagramIcon size={16} /> @luminaltarot
              </a>

              <a
                href="https://tiktok.com/@luminaltarott"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Larissa"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "var(--graphite-300)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-300)")}
              >
                <TikTokIcon size={16} /> @luminaltarott
              </a>

              <a
                href="https://luminaltarot.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack da Larissa"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "var(--graphite-300)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-300)")}
              >
                <SubstackIcon size={16} /> luminaltarot.substack.com
              </a>

              <a
                href="https://wa.me/5587996449721"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Larissa"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: "var(--graphite-300)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-300)")}
              >
                <WhatsAppIcon size={16} /> WhatsApp direto
              </a>
            </div>
          </div>

          {/* Coluna 4 — Atendimento */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "1rem" }}>
              Atendimento
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--graphite-300)", lineHeight: 1.7 }}>
              100% online<br />
              Entregas via WhatsApp e e-mail<br />
              Tarot: até 48h úteis<br />
              Astrologia: até 14 dias úteis
            </p>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          style={{
            borderTop: "1px solid rgba(184, 145, 42, 0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "var(--graphite-500)" }}>
            © {year} Larissa ✶ Astrologia & Tarot. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/politica-de-privacidade"
              style={{ fontSize: "0.72rem", color: "var(--graphite-500)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--graphite-500)")}
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
