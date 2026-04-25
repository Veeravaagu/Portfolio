import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useTypewriter } from "../lib/terminalEffects";

type SectionHeaderProps = {
  title: string;
  index?: string;
  className?: string;
  framed?: boolean;
};

export function SectionHeader({
  title,
  index,
  className,
  framed = false,
}: SectionHeaderProps) {
  const [inView, setInView] = useState(false);
  const heading = index ? `[ ${index} ] ${title}` : title;
  const { text } = useTypewriter(heading, {
    active: inView,
    speed: 35,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("mb-14 text-center", className)}
    >
      <h2
        className={cn(
          "white-glow glitch-pulse theme-text font-mono text-3xl font-bold uppercase tracking-[0.14em] sm:text-4xl",
          framed && "inline-block px-0 py-0 text-2xl sm:text-3xl",
        )}
      >
        {text || heading}
        {inView ? <span className="terminal-cursor">_</span> : null}
      </h2>
      <div
        className="mx-auto mt-4 h-px w-24"
        style={{ backgroundImage: "var(--heading-underline)" }}
      />
    </motion.div>
  );
}
