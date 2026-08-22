import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como coletamos, usamos e protegemos seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero simples */}
        <section
          style={{
            paddingTop: "clamp(7rem, 14vw, 10rem)",
            paddingBottom: "3rem",
            paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
            paddingRight: "clamp(1rem, 4vw, 2.5rem)",
            background: "var(--carbon-950)",
            borderBottom: "1px solid rgba(184, 145, 42, 0.1)",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: "1rem",
              }}
            >
              ✶ &nbsp; documentação
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--paper-50)",
              }}
            >
              Política de Privacidade
            </h1>
          </div>
        </section>

        {/* Conteúdo */}
        <section
          style={{
            padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2.5rem)",
            background: "var(--carbon-900)",
          }}
        >
          <article
            style={{
              maxWidth: 800,
              margin: "0 auto",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--graphite-300)",
              lineHeight: 1.85,
            }}
          >
            <p style={{ color: "var(--graphite-400)", fontSize: "0.8rem", marginBottom: "2.5rem" }}>
              Última atualização: agosto de 2025
            </p>

            {[
              {
                title: "1. Quem somos",
                content:
                  'Esta Política de Privacidade se aplica ao site de Larissa ✶ Astrologia & Tarot ("nós", "nos" ou "nosso"), operado por Larissa, atendimento online via WhatsApp e e-mail.',
              },
              {
                title: "2. Quais dados coletamos",
                content: `Coletamos os seguintes dados pessoais por meio do formulário de pré-consulta:
• Nome completo
• Número de WhatsApp
• Endereço de e-mail (opcional)
• Data, horário e cidade de nascimento
• Mensagem com dúvida ou contexto de consulta
• Registro de consentimento (data e hora)`,
              },
              {
                title: "3. Para que usamos seus dados",
                content: `Seus dados são utilizados exclusivamente para:
• Atendimento e realização da consulta solicitada
• Envio de notificações relacionadas à consulta via WhatsApp ou e-mail
• Organização interna dos agendamentos pela profissional

Não vendemos, alugamos, cedemos ou compartilhamos seus dados com terceiros para fins comerciais.`,
              },
              {
                title: "4. Base legal (LGPD)",
                content:
                  "O tratamento dos seus dados é realizado com base no seu consentimento expresso (Art. 7º, I, Lei nº 13.709/2018 — LGPD), obtido ao marcar o checkbox de aceite no formulário de pré-consulta. Você pode revogar seu consentimento a qualquer momento.",
              },
              {
                title: "5. Armazenamento e segurança",
                content:
                  "Os dados são armazenados em ambiente seguro com controle de acesso restrito. Tomamos medidas adequadas para proteger suas informações contra acesso não autorizado, perda ou destruição.",
              },
              {
                title: "6. Retenção de dados",
                content:
                  "Mantemos seus dados pelo período necessário para a prestação do serviço e cumprimento de obrigações legais. Você pode solicitar a exclusão dos seus dados a qualquer momento.",
              },
              {
                title: "7. Seus direitos (LGPD)",
                content: `Como titular dos dados, você tem direito a:
• Confirmação da existência de tratamento
• Acesso aos seus dados
• Correção de dados incompletos, inexatos ou desatualizados
• Eliminação dos dados
• Revogação do consentimento
• Portabilidade dos dados

Para exercer esses direitos, entre em contato via WhatsApp: wa.me/5587996449721`,
              },
              {
                title: "8. Cookies e analytics",
                content:
                  "Este site pode utilizar ferramentas de analytics (Google Analytics) que coletam dados de navegação de forma anônima e agregada, para fins estatísticos. Você pode desativar cookies nas configurações do seu navegador.",
              },
              {
                title: "9. Alterações nesta política",
                content:
                  "Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos a revisão regular. A data de última atualização está indicada no início deste documento.",
              },
              {
                title: "10. Contato",
                content:
                  "Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato:\n• WhatsApp: (87) 99644-9721\n• Instagram: @luminaltarot",
              },
            ].map(({ title, content }) => (
              <div key={title} style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "var(--paper-100)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h2>
                <p style={{ whiteSpace: "pre-line" }}>{content}</p>
              </div>
            ))}

            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(184, 145, 42, 0.15)",
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--gold-400)",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                ← Voltar ao início
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
