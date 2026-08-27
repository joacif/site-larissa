"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/types/database.types";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS: FAQ[] = [
  {
    id: "1",
    pergunta: "Como funcionam as entregas das leituras?",
    resposta:
      "As leituras de tarot são entregues via áudio e/ou PDF personalizado diretamente no seu WhatsApp ou e-mail, por ordem de chegada. As leituras astrológicas exigem cálculo prévio e são entregues em formato de relatório denso em PDF + gravação explicativa.",
    ordem: 1,
  },
  {
    id: "2",
    pergunta: "Qual é o prazo de entrega?",
    resposta:
      "Para o tarot, o prazo de entrega é a partir de 48h úteis a depender da complexidade do método e por ordem de chegada. Para a astrologia, o prazo é a partir de 14 dias úteis.",
    ordem: 2,
  },
  {
    id: "3",
    pergunta: "E se eu não souber meu horário exato de nascimento?",
    resposta:
      "Para tiragens de tarot, o horário não é necessário. Para as leituras astrológicas, o horário exato (presente na certidão de nascimento) é indispensável para o cálculo das casas e do ascendente.",
    ordem: 3,
  },
  {
    id: "4",
    pergunta: "Como é feito o pagamento?",
    resposta:
      "O agendamento é confirmado mediante o envio do comprovante de pagamento via Pix ou cartão de crédito.",
    ordem: 4,
  },
  {
    id: "5",
    pergunta: "Qual a diferença entre a Leitura Express e o Mapa Astral Natal completo?",
    resposta:
      "A Leitura Express — Mapa Natal é uma porta de entrada acessível para quem quer compreender sua essência sem um mergulho longo. Ela cobre personalidade, forma de pensar e se comunicar, afetos e relacionamentos, um potencial e um desafio principais — tudo em um áudio personalizado de 25 a 40 minutos. O Mapa Astral Natal completo vai muito além: analisa todas as casas e planetas em detalhe, inclui carreira, missão de vida, família, espiritualidade em profundidade, entrega um PDF denso e uma gravação explicativa. A Leitura Express não inclui análise completa de todas as casas e planetas, nem carreira, missão, família ou espiritualidade em profundidade, e também não contempla técnicas preditivas ou previsão de trânsitos.",
    ordem: 5,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      style={{
        padding: "var(--section-py) clamp(1rem, 4vw, 2.5rem)",
        background: "var(--carbon-800)",
      }}
    >
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
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
              ✶ &nbsp; dúvidas
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--paper-50)",
              }}
            >
              Perguntas Frequentes
            </h2>
          </div>
        </ScrollReveal>

        <dl style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={i * 0.06}>
                <div
                  style={{
                    background: "var(--carbon-700)",
                    border: `1px solid ${isOpen ? "rgba(184, 145, 42, 0.4)" : "rgba(184, 145, 42, 0.1)"}`,
                    transition: "border-color 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  {/* Pergunta */}
                  <dt>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                      onClick={() => toggle(faq.id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "1.25rem 1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                          color: isOpen ? "var(--gold-400)" : "var(--paper-100)",
                          fontWeight: 400,
                          transition: "color 0.2s",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.pergunta}
                      </span>
                      <div
                        style={{
                          flexShrink: 0,
                          color: "var(--gold-400)",
                          width: 20,
                          height: 20,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                  </dt>

                  {/* Resposta animada */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden", margin: 0 }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9rem",
                            color: "var(--graphite-300)",
                            lineHeight: 1.75,
                            padding: "0 1.5rem 1.5rem",
                          }}
                        >
                          {faq.resposta}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
