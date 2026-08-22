"use client";

import { motion } from "framer-motion";

interface MoonLogoProps {
  size?: number;
  className?: string;
}

export default function MoonLogo({ size = 36, className = "" }: MoonLogoProps) {
  return (
    <div className={className} aria-hidden="true" style={{ width: size, height: size }}>
      {/* Lua crescente com animação de rotação lenta */}
      <motion.svg
        viewBox="0 0 36 36"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Círculo exterior (lua cheia) */}
        <circle cx="18" cy="18" r="14" stroke="#b8912a" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Crescente principal */}
        <path
          d="M18 6C12.477 6 8 10.477 8 16C8 21.523 12.477 26 18 26C22.8 26 26.86 22.7 27.76 18.2C26.5 19 25 19.5 23.3 19.5C18.6 19.5 14.8 15.7 14.8 11C14.8 9.1 15.4 7.4 16.4 6C17.0 6.05 17.5 6 18 6Z"
          fill="#b8912a"
          opacity="0.9"
        />

        {/* Estrela assinatura */}
        <motion.text
          x="22"
          y="12"
          fontSize="6"
          fill="#e8c96a"
          textAnchor="middle"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✶
        </motion.text>
      </motion.svg>
    </div>
  );
}
