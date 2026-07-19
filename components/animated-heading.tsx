"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Word-by-word staggered reveal for hero headlines. Each word rises and
 * fades in with the brand easing; collapses to plain text under
 * prefers-reduced-motion.
 */
export function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: "0.5em", filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
            },
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
