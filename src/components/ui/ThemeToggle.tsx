"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "luminal-theme";

/**
 * Alterna entre modo claro (creme #FAEDE2) e escuro (paleta original).
 * Formato de "interruptor" (sol ↔ lua) para deixar claro que é uma chave,
 * com dica de texto ao passar o mouse / focar pelo teclado.
 * O tema inicial é aplicado por um script inline no <head> (layout.tsx)
 * para evitar flash; aqui apenas sincronizamos e persistimos a escolha.
 */
export default function ThemeToggle({ id = "theme-toggle" }: { id?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const read = (): Theme =>
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(read());

    // Mantém vários toggles (desktop/mobile) sincronizados
    const observer = new MutationObserver(() => setTheme(read()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Transição suave apenas durante a troca
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove("theme-transition"), 450);

    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", next === "dark" ? "#141416" : "#faede2");

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* localStorage indisponível — ignora */
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{ position: "relative", display: "inline-flex", flexShrink: 0 }}
      onMouseEnter={() => setHint(true)}
      onMouseLeave={() => setHint(false)}
    >
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Modo escuro"
        onClick={toggle}
        onFocus={() => setHint(true)}
        onBlur={() => setHint(false)}
        className="theme-switch"
        style={{
          position: "relative",
          width: 62,
          height: 32,
          padding: 0,
          borderRadius: 999,
          border: "1px solid var(--btn-outline-border)",
          background: "var(--carbon-800)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 8,
          color: "var(--graphite-400)",
        }}
      >
        {/* Ícones de fundo: indicam as duas opções */}
        <Sun size={13} aria-hidden="true" style={{ opacity: isDark ? 0.75 : 0 , transition: "opacity .25s" }} />
        <Moon size={13} aria-hidden="true" style={{ opacity: isDark ? 0 : 0.75, transition: "opacity .25s" }} />

        {/* Botão deslizante com o ícone do modo atual */}
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{ x: isDark ? 30 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "var(--btn-bg)",
            color: "var(--btn-text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme && (
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ display: "flex" }}
              >
                {isDark ? <Moon size={13} /> : <Sun size={13} />}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </button>

      {/* Dica de texto */}
      <AnimatePresence>
        {hint && theme && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: "50%",
              translate: "-50% 0",
              whiteSpace: "nowrap",
              background: "var(--btn-bg)",
              color: "var(--btn-text)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              padding: "0.35rem 0.7rem",
              borderRadius: 4,
              pointerEvents: "none",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
              zIndex: 60,
            }}
          >
            {isDark ? "☀ Modo claro" : "☾ Modo escuro"}
          </motion.span>
        )}
      </AnimatePresence>

      <style>{`
        .theme-switch:focus-visible {
          outline: 2px solid var(--gold-400);
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
