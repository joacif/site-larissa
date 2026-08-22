"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Servico } from "@/types/database.types";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─────────────────────────────────────────────────────────────
// Dados estáticos dos serviços
// ─────────────────────────────────────────────────────────────
export const SERVICOS: Servico[] = [
  // ── TAROT ──────────────────────────────────────────────────
  {
    id: "tarot-01",
    titulo: "Pergunta Objetiva & Previsões Semanais / Mensais",
    descricao:
      "Resposta focada e direta sobre uma dúvida pontual do seu momento. Entrega via foto do jogo + áudio personalizado no WhatsApp.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 1,
  },
  {
    id: "tarot-02",
    titulo: "Ficar ou Partir?",
    descricao:
      "Uma leitura comparativa e estratégica que pesa os prós e contras de insistir na relação atual versus abrir mão e seguir em frente.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 2,
  },
  {
    id: "tarot-03",
    titulo: "Mesa de Carreira, Finanças & Caminhos",
    descricao:
      "Panorama completo da vida profissional e financeira. Identifica bloqueios de prosperidade, oportunidades de crescimento e momento ideal para transição de carreira.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 3,
  },
  {
    id: "tarot-04",
    titulo: "Bloqueios Profissionais / Financeiros",
    descricao:
      "Quais são seus bloqueios principais, nesse momento, para avançar nessas áreas da vida.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 4,
  },
  {
    id: "tarot-05",
    titulo: "Templo de Afrodite",
    descricao:
      "Análise clássica e profunda da dinâmica entre duas pessoas em três níveis: mental, sentimental e físico/químico, além das tendências do futuro breve da relação.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 5,
  },
  {
    id: "tarot-06",
    titulo: "Recado da Deusa",
    descricao:
      "A energia feminina tem um recado para você! Entenda qual energia de deusa quer se conectar com você nesse momento e receba um ritual para se conectar com sua energia.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 6,
  },
  {
    id: "tarot-07",
    titulo: "Previsão Geral — 4 Meses",
    descricao:
      "O que vem em breve na sua vida? Profissional, amorosa, financeira e geral. Olhamos previsão breve, bloqueio e conselho para cada área.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 7,
  },
  {
    id: "tarot-08",
    titulo: "Mesa de Relacionamento Completa",
    descricao:
      "O diagnóstico amoroso definitivo. Analisa a energia geral do vínculo, pensamentos e intenções ocultas e o que está escondido na relação.",
    duracao: "Até 48h úteis",
    preco: null,
    categoria: "tarot",
    ativo: true,
    ordem: 8,
  },
  // ── ASTROLOGIA ─────────────────────────────────────────────
  {
    id: "astro-01",
    titulo: "Mapa Astral Natal",
    descricao:
      "Estudo completo do seu mapa de nascimento — personalidade, propósito, padrões emocionais, carreira e relacionamentos. Entrega em PDF denso + gravação explicativa.",
    duracao: "Até 14 dias úteis",
    preco: null,
    categoria: "astrologia",
    ativo: true,
    ordem: 9,
  },
  {
    id: "astro-02",
    titulo: "Revolução Solar",
    descricao:
      "Previsão astrológica para o ano que começa no seu aniversário. Identifica os temas principais, os meses de pico e as oportunidades do ciclo.",
    duracao: "Até 14 dias úteis",
    preco: null,
    categoria: "astrologia",
    ativo: true,
    ordem: 10,
  },
  {
    id: "astro-03",
    titulo: "Sinastria — Compatibilidade Astrológica",
    descricao:
      "Análise da dinâmica entre dois mapas natais. Revela pontos de harmonia, tensão, atração e crescimento mútuo em uma relação.",
    duracao: "Até 14 dias úteis",
    preco: null,
    categoria: "astrologia",
    ativo: true,
    ordem: 11,
  },
  {
    id: "astro-04",
    titulo: "Astrocartografia",
    descricao:
      "Descubra quais lugares do mundo potencializam amor, carreira, espiritualidade ou expansão financeira para o seu mapa natal.",
    duracao: "Até 14 dias úteis",
    preco: null,
    categoria: "astrologia",
    ativo: true,
    ordem: 12,
  },
];

interface ServiceCardProps {
  servico: Servico;
  onAgendar: (id: string, nome: string) => void;
}

function ServiceCard({ servico, onAgendar }: ServiceCardProps) {
  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Categoria */}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold-400)",
          display: "block",
          marginBottom: "0.75rem",
        }}
      >
        {servico.categoria === "astrologia" ? "✶ Astrologia" : "✶ Tarot"}
      </span>

      {/* Título */}
      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "var(--paper-100)",
          marginBottom: "0.75rem",
          lineHeight: 1.25,
          fontWeight: 400,
        }}
      >
        {servico.titulo}
      </h3>

      {/* Descrição */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          color: "var(--graphite-300)",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "1.25rem",
        }}
      >
        {servico.descricao}
      </p>

      {/* Rodapé do card */}
      <div style={{ borderTop: "1px solid var(--carbon-600)", paddingTop: "1rem", marginTop: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            {servico.duracao && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "var(--graphite-400)",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-sans)",
                  marginBottom: "0.35rem",
                }}
              >
                <Clock size={11} />
                {servico.duracao}
              </div>
            )}
            {servico.preco != null && (
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.1rem",
                  color: "var(--gold-400)",
                  fontWeight: 500,
                }}
              >
                R$ {servico.preco.toFixed(2).replace(".", ",")}
              </div>
            )}
          </div>

          <button
            onClick={() => onAgendar(servico.id, servico.titulo)}
            aria-label={`Agendar ${servico.titulo}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              background: "none",
              border: "1px solid rgba(184, 145, 42, 0.4)",
              color: "var(--gold-400)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.5rem 0.9rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
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
            Agendar <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"tarot" | "astrologia">("tarot");

  const handleAgendar = (_id: string, _nome: string) => {
    document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
  };

  const filtered = SERVICOS.filter((s) => s.categoria === activeTab);

  return (
    <section
      id="servicos"
      aria-label="Serviços"
      style={{
        padding: "var(--section-py) clamp(1rem, 4vw, 2.5rem)",
        background: "var(--carbon-800)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header da seção */}
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
              ✶ &nbsp; o que ofereço
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--paper-50)",
                marginBottom: "1rem",
              }}
            >
              Serviços & Leituras
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--graphite-400)",
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Cada leitura é feita com estudo dedicado, escuta cuidadosa e entrega personalizada.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs de categoria */}
        <ScrollReveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Categorias de serviço"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {(["tarot", "astrologia"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.6rem 1.5rem",
                  background: activeTab === tab ? "var(--gold-500)" : "transparent",
                  color: activeTab === tab ? "var(--carbon-900)" : "var(--graphite-400)",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "var(--gold-500)" : "var(--carbon-600)",
                  cursor: "pointer",
                  fontWeight: activeTab === tab ? 600 : 400,
                  transition: "all 0.2s ease",
                }}
              >
                {tab === "tarot" ? "✶ Tarot" : "✶ Astrologia"}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid de cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((servico, i) => (
            <ScrollReveal key={servico.id} delay={i * 0.07}>
              <ServiceCard servico={servico} onAgendar={handleAgendar} />
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
