"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MoonLogo from "@/components/ui/MoonLogo";

const NAV_LINKS = [
  { label: "Início",       href: "#hero" },
  { label: "Sobre",        href: "#sobre" },
  { label: "Serviços",     href: "#servicos" },
  { label: "Depoimentos",  href: "#depoimentos" },
  { label: "FAQ",          href: "#faq" },
];

const SECTIONS = ["hero", "sobre", "servicos", "depoimentos", "faq"];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("hero");

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);

      // Scroll spy
      const found = SECTIONS.slice().reverse().find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= 120;
      });
      if (found) setActive(found);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar mobile no resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.35s ease, border-color 0.35s ease",
          background: scrolled
            ? "rgba(17, 17, 17, 0.95)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(184, 145, 42, 0.2)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <nav
          aria-label="Navegação principal"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2.5rem)",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Ir para o início"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <MoonLogo size={32} />
            <div style={{ lineHeight: 1.1 }}>
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  color: "var(--paper-100)",
                  letterSpacing: "0.02em",
                  fontWeight: 400,
                  display: "block",
                }}
              >
                larissa
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  color: "var(--gold-400)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                ✶ astrologia & tarot
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div
            role="navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1rem, 3vw, 2rem)",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <div key={href} style={{ position: "relative" }}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    aria-current={isActive ? "location" : undefined}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--gold-400)" : "var(--paper-200)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      paddingBottom: 4,
                    }}
                  >
                    {label}
                  </a>
                  {/* Sublinhado animado */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: "var(--gold-400)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}

            <a
              href="#agendar"
              onClick={(e) => handleNavClick(e, "#agendar")}
              className="btn-gold"
              style={{ fontSize: "0.75rem", padding: "0.55rem 1.2rem" }}
            >
              Agendar Consulta
            </a>
          </div>

          {/* Botão hambúrguer mobile */}
          <button
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              color: "var(--paper-100)",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu de navegação mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 90vw)",
              background: "var(--carbon-900)",
              borderLeft: "1px solid rgba(184, 145, 42, 0.2)",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              padding: "5rem 2rem 2rem",
              gap: "0.25rem",
            }}
          >
            <button
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                color: "var(--paper-200)",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              <X size={22} />
            </button>

            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem",
                  color: "var(--paper-100)",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(184, 145, 42, 0.1)",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="#agendar"
              onClick={(e) => handleNavClick(e, "#agendar")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn-gold"
              style={{ marginTop: "2rem", textAlign: "center", justifyContent: "center" }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 99,
            }}
          />
        )}
      </AnimatePresence>

      {/* Estilos responsivos inline */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
