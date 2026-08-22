"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StarField from "@/components/ui/StarField";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax suave no mouse
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth  - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      container.style.setProperty("--mx", `${x}px`);
      container.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Início"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #141416 0%, #1c1c20 45%, #24160a 100%)",
        "--mx": "0px",
        "--my": "0px",
      } as React.CSSProperties}
    >
      {/* Campo de estrelas */}
      <StarField />

      {/* Gradiente de sobreposição */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(184,145,42,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Elemento decorativo — mapa astral estilizado */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "clamp(-8rem, -5vw, -2rem)",
          top: "50%",
          transform: "translateY(-50%) translateX(var(--mx)) translateY(var(--my))",
          width: "clamp(280px, 45vw, 560px)",
          height: "clamp(280px, 45vw, 560px)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#b8912a" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#b8912a" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="110" stroke="#b8912a" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="70"  stroke="#b8912a" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="30"  stroke="#b8912a" strokeWidth="1" />
          {/* Linhas radiais */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 200 + 190 * Math.cos(angle);
            const y2 = 200 + 190 * Math.sin(angle);
            return (
              <line key={i} x1="200" y1="200" x2={x2} y2={y2} stroke="#b8912a" strokeWidth="0.5" opacity="0.5" />
            );
          })}
          {/* Triângulo interior */}
          <polygon
            points="200,60 330,290 70,290"
            stroke="#b8912a"
            strokeWidth="0.5"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      {/* Conteúdo principal */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) clamp(1rem, 4vw, 2.5rem) clamp(4rem, 8vw, 6rem)",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "clamp(300px, 55%, 700px)" }}>
          {/* Pré-título */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold-400)",
              marginBottom: "1.5rem",
            }}
          >
            ✶ &nbsp; Astrologia & Tarot &nbsp; ✶
          </motion.p>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--paper-50)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            ferramentas simbólicas de{" "}
            <em style={{ color: "var(--gold-300)", fontStyle: "italic" }}>
              percepção
            </em>{" "}
            e direcionamento
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "var(--graphite-300)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 520,
            }}
          >
            para revelar o invisível e destravar seus caminhos — com estudo sério,
            simbologia e escuta cuidadosa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
          >
            <button
              onClick={scrollToServices}
              className="btn-gold"
              aria-label="Ver serviços disponíveis"
            >
              Explorar Serviços
            </button>
            <a
              href="#agendar"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendar Consulta
            </a>
          </motion.div>

          {/* Métricas de impacto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(184, 145, 42, 0.15)",
            }}
          >
            {[
              { value: "8+",    label: "anos estudando astrologia" },
              { value: "4 anos", label: "de prática com tarot" },
              { value: "500+",  label: "consultas realizadas" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "var(--gold-400)",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    color: "var(--graphite-400)",
                    letterSpacing: "0.05em",
                    maxWidth: 140,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.8 }, y: { duration: 2, repeat: Infinity } }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          color: "var(--gold-500)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}>
          scroll
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
