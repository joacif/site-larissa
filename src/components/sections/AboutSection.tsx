import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-label="Sobre a Larissa"
      style={{
        padding: "var(--section-py) clamp(1rem, 4vw, 2.5rem)",
        background: "var(--carbon-900)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(3rem, 8vw, 7rem)",
          alignItems: "center",
        }}
      >
        {/* Imagem assimétrica */}
        <ScrollReveal direction="left">
          <div
            style={{
              position: "relative",
              paddingTop: "2rem",
              paddingRight: "2rem",
            }}
          >
            {/* Frame decorativo deslocado */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "85%",
                height: "90%",
                border: "1px solid rgba(184, 145, 42, 0.3)",
                zIndex: 0,
              }}
            />

            {/* Foto com leve rotação */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                transform: "rotate(-1.5deg)",
                transformOrigin: "center",
              }}
            >
              <Image
                src="/images/larissa-profile.jpg"
                alt="Larissa, astróloga e taróloga"
                width={480}
                height={600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  filter: "contrast(1.05) brightness(0.92)",
                }}
              />

              {/* Tag flutuante */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "-1.5rem",
                  background: "var(--carbon-800)",
                  border: "1px solid rgba(184, 145, 42, 0.3)",
                  padding: "0.75rem 1.25rem",
                  transform: "rotate(1.5deg)",
                }}
              >
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.85rem", color: "var(--gold-400)", margin: 0 }}>
                  ✶ 8 anos de estudo
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--graphite-400)", margin: 0 }}>
                  astrologia tradicional + tarô cabalístico
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Texto */}
        <ScrollReveal direction="right" delay={0.15}>
          <div>
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
              ✶ &nbsp; sobre mim
            </p>

            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--paper-50)",
                marginBottom: "0.5rem",
                lineHeight: 1.15,
              }}
            >
              Oi, eu sou a Larissa.
            </h2>

            <div
              style={{
                width: 48,
                height: 1,
                background: "var(--gold-500)",
                margin: "1.25rem 0 1.75rem",
              }}
            />

            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "var(--graphite-300)",
                lineHeight: 1.85,
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <p>
                Tenho 26 anos, atendo há mais de um ano e meio e dedico meu trabalho
                ao estudo sério da mente e do oculto.
              </p>
              <p>
                Estudo astrologia há <strong style={{ color: "var(--paper-200)" }}>8+ anos</strong> e
                tarot há <strong style={{ color: "var(--paper-200)" }}>4 anos</strong>,
                combinando as linguagens da astrologia tradicional, do tarô cabalístico,
                da simbologia e do autoconhecimento profundo.
              </p>
              <p>
                Meu propósito não é prever um futuro inflexível, mas oferecer{" "}
                <em style={{ color: "var(--paper-100)", fontStyle: "italic" }}>
                  ferramentas de autonomia e percepção
                </em>{" "}
                para que você entenda seu momento presente e tome as rédeas dos
                seus caminhos.
              </p>
            </div>

            {/* Áreas de estudo */}
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {[
                "Astrologia Tradicional",
                "Tarô Cabalístico",
                "Simbologia",
                "Autoconhecimento",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    color: "var(--gold-400)",
                    border: "1px solid rgba(184, 145, 42, 0.3)",
                    padding: "0.3rem 0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a
                href="#agendar"
                className="btn-gold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Agendar minha consulta
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
