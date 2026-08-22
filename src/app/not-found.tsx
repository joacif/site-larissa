import Link from "next/link";
import MoonLogo from "@/components/ui/MoonLogo";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--carbon-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elemento decorativo de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vmin",
          height: "60vmin",
          borderRadius: "50%",
          border: "1px solid rgba(184, 145, 42, 0.06)",
          boxShadow: "0 0 0 30px rgba(184,145,42,0.03), 0 0 0 60px rgba(184,145,42,0.02)",
          pointerEvents: "none",
        }}
      />

      <MoonLogo size={56} />

      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(5rem, 15vw, 10rem)",
          color: "rgba(184, 145, 42, 0.12)",
          lineHeight: 1,
          margin: "1rem 0 0",
          fontWeight: 700,
        }}
        aria-hidden="true"
      >
        404
      </p>

      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 400,
          color: "var(--paper-100)",
          marginBottom: "1rem",
        }}
      >
        Esta página não foi encontrada
      </h1>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          color: "var(--graphite-400)",
          lineHeight: 1.7,
          maxWidth: 400,
          marginBottom: "2.5rem",
        }}
      >
        Às vezes, até os astros ficam em silêncio. A página que você procura
        não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="btn-gold"
        aria-label="Voltar à página inicial"
      >
        Voltar ao início ✶
      </Link>
    </main>
  );
}
