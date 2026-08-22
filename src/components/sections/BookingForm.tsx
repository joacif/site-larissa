"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { agendamentoSchema, AgendamentoFormData } from "@/lib/validations";
import { buildWhatsAppURL, buildAgendamentoMessage } from "@/lib/utils";
import { SERVICOS } from "@/components/sections/ServicesSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

type FormStatus = "idle" | "loading" | "success" | "error";

const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

// Máscara simples de WhatsApp
function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2)  return digits.replace(/(\d{0,2})/, "($1");
  if (digits.length <= 7)  return digits.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  if (digits.length <= 11) return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  return digits;
}

export default function BookingForm() {
  const [status, setStatus]     = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<AgendamentoFormData>({
    resolver: zodResolver(agendamentoSchema),
    defaultValues: {
      servico_id: "",
      servico_nome: "",
      consentimento_lgpd: false,
    },
  });

  const servicoId   = watch("servico_id");
  const whatsappVal = watch("whatsapp") || "";

  // Sincronizar nome do serviço ao mudar select
  const handleServicoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setValue("servico_id", id);
    const found = SERVICOS.find((s) => s.id === id);
    if (found) setValue("servico_nome", found.titulo);
  };

  const onSubmit = async (data: AgendamentoFormData) => {
    setStatus("loading");
    setErrorMsg("");

    try {
      // Enviar para Google Sheets via Apps Script
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: data.nome,
            whatsapp: data.whatsapp,
            email: data.email || "",
            servico: data.servico_nome || "",
            data_nascimento: data.data_nascimento || "",
            horario_nascimento: data.horario_nascimento || "",
            cidade_nascimento: data.cidade_nascimento || "",
            mensagem: data.mensagem || "",
            data_envio: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
          }),
        });
      }

      setStatus("success");

      // Montar e abrir URL do WhatsApp
      const msg = buildAgendamentoMessage({
        nome:             data.nome,
        servicoNome:      data.servico_nome || "serviço selecionado",
        dataNascimento:   data.data_nascimento,
        horarioNascimento: data.horario_nascimento,
        cidadeNascimento: data.cidade_nascimento,
      });
      const url = buildWhatsAppURL("5587996449721", msg);

      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 800);

      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Ocorreu um erro. Tente novamente."
      );
    }
  };

  // Estilos reutilizáveis
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--carbon-700)",
    border: "1px solid var(--carbon-600)",
    color: "var(--paper-100)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    padding: "0.8rem 1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--graphite-300)",
    display: "block",
    marginBottom: "0.4rem",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.72rem",
    color: "#e05555",
    marginTop: "0.3rem",
  };

  const tarotServicos = SERVICOS.filter((s) => s.categoria === "tarot");
  const astroServicos = SERVICOS.filter((s) => s.categoria === "astrologia");

  return (
    <section
      id="agendar"
      aria-label="Formulário de agendamento"
      style={{
        padding: "var(--section-py) clamp(1rem, 4vw, 2.5rem)",
        background: "var(--carbon-900)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
              ✶ &nbsp; pré-consulta
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
              Agendar uma Leitura
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--graphite-400)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Preencha o formulário abaixo. Após o envio, você será redirecionada
              para o WhatsApp para confirmar sua consulta.
            </p>
          </div>
        </ScrollReveal>

        {/* Estado de sucesso */}
        {status === "success" && (
          <div
            role="alert"
            style={{
              background: "rgba(184, 145, 42, 0.08)",
              border: "1px solid rgba(184, 145, 42, 0.4)",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <CheckCircle2
              size={36}
              style={{ color: "var(--gold-400)", margin: "0 auto 1rem" }}
            />
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.2rem",
                color: "var(--paper-100)",
                marginBottom: "0.5rem",
              }}
            >
              Dados recebidos com sucesso! ✶
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                color: "var(--graphite-300)",
              }}
            >
              O WhatsApp foi aberto em uma nova aba para você confirmar o agendamento.
              <br />
              Aguardo seu contato!
            </p>
          </div>
        )}

        {/* Formulário */}
        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Formulário de pré-consulta"
            style={{
              background: "var(--carbon-800)",
              border: "1px solid rgba(184, 145, 42, 0.15)",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Grid 2 colunas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Nome */}
              <div>
                <label htmlFor="nome" style={labelStyle}>
                  Nome completo *
                </label>
                <input
                  id="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome"
                  aria-required="true"
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                  {...register("nome")}
                  style={{
                    ...inputStyle,
                    borderColor: errors.nome ? "#e05555" : "var(--carbon-600)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.nome ? "#e05555" : "var(--carbon-600)"; }}
                />
                {errors.nome && (
                  <p id="nome-error" role="alert" style={errorStyle}>
                    {errors.nome.message}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" style={labelStyle}>
                  WhatsApp *
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(XX) XXXXX-XXXX"
                  aria-required="true"
                  aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  value={maskPhone(whatsappVal)}
                  {...register("whatsapp", {
                    onChange: (e) => {
                      e.target.value = maskPhone(e.target.value);
                    },
                  })}
                  style={{
                    ...inputStyle,
                    borderColor: errors.whatsapp ? "#e05555" : "var(--carbon-600)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.whatsapp ? "#e05555" : "var(--carbon-600)"; }}
                />
                {errors.whatsapp && (
                  <p id="whatsapp-error" role="alert" style={errorStyle}>
                    {errors.whatsapp.message}
                  </p>
                )}
              </div>
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" style={labelStyle}>
                E-mail (opcional)
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                {...register("email")}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                onBlur={(e) => { e.target.style.borderColor = "var(--carbon-600)"; }}
              />
            </div>

            {/* Serviço */}
            <div>
              <label htmlFor="servico_id" style={labelStyle}>
                Serviço desejado *
              </label>
              <select
                id="servico_id"
                aria-required="true"
                aria-describedby={errors.servico_id ? "servico-error" : undefined}
                value={servicoId}
                onChange={handleServicoChange}
                style={{
                  ...inputStyle,
                  borderColor: errors.servico_id ? "#e05555" : "var(--carbon-600)",
                  cursor: "pointer",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23b8912a' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">— Selecione um serviço —</option>
                <optgroup label="✶ Tarot">
                  {tarotServicos.map((s) => (
                    <option key={s.id} value={s.id}>{s.titulo}</option>
                  ))}
                </optgroup>
                <optgroup label="✶ Astrologia">
                  {astroServicos.map((s) => (
                    <option key={s.id} value={s.id}>{s.titulo}</option>
                  ))}
                </optgroup>
              </select>
              {/* Hidden input for react-hook-form */}
              <input type="hidden" {...register("servico_id")} value={servicoId} />
              {errors.servico_id && (
                <p id="servico-error" role="alert" style={errorStyle}>
                  {errors.servico_id.message}
                </p>
              )}
            </div>

            {/* Dados de nascimento */}
            <div>
              <p style={{ ...labelStyle, marginBottom: "1rem" }}>
                Dados de nascimento{" "}
                <span style={{ color: "var(--graphite-500)", fontWeight: 300 }}>
                  (obrigatório para leituras de astrologia)
                </span>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div>
                  <label htmlFor="data_nascimento" style={labelStyle}>Data *</label>
                  <input
                    id="data_nascimento"
                    type="date"
                    {...register("data_nascimento")}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--carbon-600)"; }}
                  />
                </div>
                <div>
                  <label htmlFor="horario_nascimento" style={labelStyle}>
                    Horário (certidão)
                  </label>
                  <input
                    id="horario_nascimento"
                    type="time"
                    {...register("horario_nascimento")}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--carbon-600)"; }}
                  />
                </div>
                <div>
                  <label htmlFor="cidade_nascimento" style={labelStyle}>
                    Cidade / Estado
                  </label>
                  <input
                    id="cidade_nascimento"
                    type="text"
                    placeholder="Ex: Recife / PE"
                    {...register("cidade_nascimento")}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--carbon-600)"; }}
                  />
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="mensagem" style={labelStyle}>
                Sua principal dúvida, contexto ou expectativa
              </label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Compartilhe o que você está vivendo ou o que espera da leitura..."
                {...register("mensagem")}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 100,
                }}
                onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                onBlur={(e) => { e.target.style.borderColor = "var(--carbon-600)"; }}
              />
              {errors.mensagem && (
                <p role="alert" style={errorStyle}>{errors.mensagem.message}</p>
              )}
            </div>

            {/* Consentimento LGPD */}
            <div>
              <label
                htmlFor="consentimento_lgpd"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  id="consentimento_lgpd"
                  type="checkbox"
                  aria-required="true"
                  aria-describedby={errors.consentimento_lgpd ? "lgpd-error" : undefined}
                  {...register("consentimento_lgpd")}
                  style={{
                    width: 18,
                    height: 18,
                    flexShrink: 0,
                    accentColor: "var(--gold-500)",
                    marginTop: 2,
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    color: "var(--graphite-300)",
                    lineHeight: 1.6,
                  }}
                >
                  Li e aceito a{" "}
                  <Link
                    href="/politica-de-privacidade"
                    target="_blank"
                    style={{ color: "var(--gold-400)", textDecoration: "underline" }}
                  >
                    Política de Privacidade
                    <ExternalLink
                      size={10}
                      style={{ display: "inline", marginLeft: 2 }}
                      aria-hidden="true"
                    />
                  </Link>{" "}
                  e consinto com o uso dos meus dados para fins de atendimento conforme a LGPD. *
                </span>
              </label>
              {errors.consentimento_lgpd && (
                <p id="lgpd-error" role="alert" style={{ ...errorStyle, marginTop: "0.5rem" }}>
                  {errors.consentimento_lgpd.message}
                </p>
              )}
            </div>

            {/* Erro geral */}
            {status === "error" && (
              <div
                role="alert"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(224, 85, 85, 0.08)",
                  border: "1px solid rgba(224, 85, 85, 0.3)",
                  padding: "0.75rem 1rem",
                  color: "#e08080",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                }}
              >
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}

            {/* Botão de envio */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold"
              aria-label="Enviar formulário e ir para WhatsApp"
              style={{
                justifyContent: "center",
                opacity: status === "loading" ? 0.7 : 1,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                fontSize: "0.85rem",
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                  Enviando...
                </>
              ) : (
                "Enviar e continuar pelo WhatsApp ✶"
              )}
            </button>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                color: "var(--graphite-500)",
                textAlign: "center",
              }}
            >
              * Campos obrigatórios. Seus dados são protegidos e usados apenas para atendimento.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
