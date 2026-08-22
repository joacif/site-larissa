"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X, Sparkles } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface DepoimentoItem {
  id: string;
  imagemUrl: string;
  titulo: string;
  resumo: string;
}

const DEPOIMENTOS_REAIS: DepoimentoItem[] = [
  {
    id: "1",
    imagemUrl: "/images/depoimentos/depoimento-1.jpg",
    titulo: "Tiragem Perfeita & Acolhimento",
    resumo:
      "“Lariii impressionante 🥺💖 gratidão meu amor por essa mensagem, tiragem perfeita... Faz todo sentido a analogia da criança abraçando o monstro. Gratidão universo por ter colocado você na minha vida.”",
  },
  {
    id: "2",
    imagemUrl: "/images/depoimentos/depoimento-2.jpg",
    titulo: "Tiragens Certeiras & Emoção",
    resumo:
      "“As suas tiragens foram certeiras. Me emocionei e chorei ouvindo, falaram a verdade sobre como eu me sinto... Fiquei chocada, você é muito talentosa! Eu tava precisando de uma luz.”",
  },
  {
    id: "3",
    imagemUrl: "/images/depoimentos/depoimento-3.jpg",
    titulo: "Clareza & Propósito",
    resumo:
      "“Só passando pra te agradecer pela tiragem, ela ainda está ecoando em mim... É muito mais fácil lidar com meus sentimentos agora que entendo o que vim pra fazer aqui.”",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent]       = useState(0);
  const [isPaused, setIsPaused]     = useState(false);
  const [modalImg, setModalImg]     = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % DEPOIMENTOS_REAIS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + DEPOIMENTOS_REAIS.length) % DEPOIMENTOS_REAIS.length);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!isPaused && !modalImg) {
      intervalRef.current = setInterval(next, 7000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, modalImg, next]);

  const dep = DEPOIMENTOS_REAIS[current];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos"
      style={{
        padding: "var(--section-py) clamp(1rem, 4vw, 2.5rem)",
        background: "var(--carbon-900)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: "1rem",
              }}
            >
              ✶ &nbsp; feedbacks reais
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--paper-50)",
                marginBottom: "0.75rem",
              }}
            >
              O que dizem sobre as leituras
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--graphite-400)",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Mensagens espontâneas de consulentes que encontraram clareza, direcionamento e paz nas tiragens.
            </p>
          </div>
        </ScrollReveal>

        {/* Card Destaque Interativo com o Print Real */}
        <div
          role="region"
          aria-label="Carrossel de depoimentos reais"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={dep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: "var(--carbon-800)",
                border: "1px solid rgba(184, 145, 42, 0.25)",
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                alignItems: "center",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Imagem do Print com Moldura e Zoom */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "360px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid rgba(184, 145, 42, 0.2)",
                  background: "#0d0d0d",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setModalImg(dep.imagemUrl)}
                title="Clique para ampliar o feedback"
              >
                <div style={{ position: "relative", width: "100%", height: "340px" }}>
                  <Image
                    src={dep.imagemUrl}
                    alt={`Depoimento e feedback real de ${dep.titulo}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                {/* Botão de Zoom Sobreposto */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "rgba(18, 18, 18, 0.85)",
                    border: "1px solid rgba(184, 145, 42, 0.4)",
                    color: "var(--gold-400)",
                    padding: "4px 8px",
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "2px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <ZoomIn size={13} /> Ampliar
                </div>
              </div>

              {/* Texto do Depoimento */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    color: "var(--gold-400)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  <Sparkles size={14} />
                  {dep.titulo}
                </div>

                <blockquote
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    fontStyle: "italic",
                    color: "var(--paper-100)",
                    lineHeight: 1.7,
                    margin: "0 0 1.5rem",
                  }}
                >
                  {dep.resumo}
                </blockquote>

                <button
                  onClick={() => setModalImg(dep.imagemUrl)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--gold-400)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    textDecoration: "underline",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    width: "fit-content",
                  }}
                >
                  Ver print completo do WhatsApp ↗
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de Navegação */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                background: "none",
                border: "1px solid rgba(184, 145, 42, 0.3)",
                color: "var(--gold-400)",
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-500)";
                e.currentTarget.style.color = "var(--carbon-900)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "var(--gold-400)";
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Indicadores / Miniaturas */}
            <div role="tablist" style={{ display: "flex", gap: "0.6rem" }}>
              {DEPOIMENTOS_REAIS.map((item, i) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === current ? "var(--gold-400)" : "var(--carbon-600)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                background: "none",
                border: "1px solid rgba(184, 145, 42, 0.3)",
                color: "var(--gold-400)",
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-500)";
                e.currentTarget.style.color = "var(--carbon-900)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "var(--gold-400)";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal / Lightbox de Zoom */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImg(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5rem",
              cursor: "zoom-out",
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "600px",
                height: "80vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImg(null)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                }}
              >
                <X size={20} /> Fechar
              </button>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid rgba(184, 145, 42, 0.4)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
                  background: "#0d0d0d",
                }}
              >
                <Image
                  src={modalImg}
                  alt="Feedback real ampliado"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
