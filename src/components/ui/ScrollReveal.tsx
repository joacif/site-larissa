"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const variants: Record<string, Variants> = {
  up:    { hidden: { opacity: 0, y: 32  }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32  }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
