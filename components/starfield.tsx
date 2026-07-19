"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  z: number; // depth 0..1 — drives size, brightness, and parallax
  twinkle: number;
}

/**
 * Ambient depth layer: a slowly drifting starfield with mouse parallax,
 * rendered on canvas behind the hero. Density scales with area, colors
 * follow the active theme, and the whole layer is skipped entirely for
 * prefers-reduced-motion. Inspired by space-portfolio aesthetics but kept
 * subtle enough to stay "terminal, not void".
 */
export function Starfield({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0.5, y: 0.5 };

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.floor((width * height) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        twinkle: Math.random() * Math.PI * 2,
      }));
    }

    function onPointerMove(event: PointerEvent) {
      pointer.x = event.clientX / window.innerWidth;
      pointer.y = event.clientY / window.innerHeight;
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const dark = themeRef.current !== "light";
      // Warm white stars on dark, cool ink specks on light.
      const [r, g, b] = dark ? [237, 232, 220] : [46, 50, 66];
      const parallaxX = (pointer.x - 0.5) * 24;
      const parallaxY = (pointer.y - 0.5) * 16;

      for (const star of stars) {
        // Slow diagonal drift, deeper stars move less.
        star.x += 0.012 * (0.3 + star.z);
        star.y -= 0.008 * (0.3 + star.z);
        if (star.x > width + 2) star.x = -2;
        if (star.y < -2) star.y = height + 2;

        const flicker = 0.65 + 0.35 * Math.sin(time / 900 + star.twinkle);
        const alpha = (dark ? 0.55 : 0.35) * (0.25 + star.z * 0.75) * flicker;
        const size = 0.4 + star.z * 1.3;
        ctx.beginPath();
        ctx.arc(star.x + parallaxX * star.z, star.y + parallaxY * star.z, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
