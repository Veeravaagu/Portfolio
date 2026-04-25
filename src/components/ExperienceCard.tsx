import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import type { ExperienceItem } from "../data/portfolioData";
import { useInView, useTypewriter } from "../lib/terminalEffects";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
  inView?: boolean;
  revealDelay?: number;
};

export function ExperienceCard({
  item,
  index,
  inView = true,
  revealDelay = 0,
}: ExperienceCardProps) {
  const isLeft = index % 2 === 0;
  const [cardRef, cardInView] = useInView<HTMLDivElement>(0.25);
  const shouldType = inView && cardInView;
  const { text: roleText, done: roleDone } = useTypewriter(item.role, {
    speed: 30,
    delay: revealDelay,
    active: shouldType,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-stretch"
    >
      <span
        className={cn(
          "absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgb(var(--color-accent)/0.95)] bg-black lg:block",
          item.active && "border-[rgb(var(--color-accent))]",
        )}
        style={{
          boxShadow: item.active
            ? "0 0 0 4px rgb(var(--color-accent) / 0.22), 0 0 30px rgb(var(--color-accent) / 0.5)"
            : "0 0 0 4px rgb(var(--color-accent) / 0.18), 0 0 24px rgb(var(--color-accent) / 0.35)",
        }}
      />

      <div
        className={cn(
          "h-full p-0 text-left transition duration-200 hover:-translate-y-1",
          isLeft ? "lg:col-start-1" : "lg:col-start-3",
        )}
      >
        <p className="orange-glow mb-2 font-display text-base uppercase tracking-[0.1em]">
          {item.date}
        </p>
        <h3 className="mb-1 min-h-[1.4em] font-mono text-base font-bold theme-text">
          {roleText}
          {shouldType && !roleDone ? (
            <span className="terminal-cursor text-[0.8em]">▌</span>
          ) : null}
        </h3>
        <p className="mb-5 font-mono text-xs theme-muted">
          {item.company} · {item.location}
        </p>
        <ul className="space-y-3 font-mono text-xs leading-7 theme-text">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center text-[rgb(var(--color-accent))]">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden h-full lg:col-start-2 lg:block" />

      <div className={cn("hidden h-full lg:block", isLeft ? "lg:col-start-3" : "lg:col-start-1")} />
    </motion.div>
  );
}
