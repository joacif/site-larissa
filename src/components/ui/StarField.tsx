"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  phase: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STAR_COUNT = 140;
    let stars: Star[] = [];
    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        radius:  Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        speed:   Math.random() * 0.8 + 0.3,
        phase:   Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.012;

      for (const star of stars) {
        const twinkle = Math.sin(time * star.speed + star.phase);
        const alpha   = star.opacity + twinkle * 0.25;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 201, 106, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    resize();
    createStars();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}
