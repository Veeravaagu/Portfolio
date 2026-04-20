import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import type { ExperienceItem } from "../data/portfolioData";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-stretch"
    >
      <span
        className={cn(
          "absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgb(var(--color-accent)/0.95)] bg-black shadow-[0_0_0_4px_rgba(126,173,227,0.18),0_0_24px_rgba(126,173,227,0.35)] lg:block",
          item.active &&
            "border-[rgb(var(--color-accent))] shadow-[0_0_0_4px_rgba(126,173,227,0.22),0_0_30px_rgba(126,173,227,0.5)]",
        )}
      />

      <div
        className={cn(
          "glass-card glass-card-black h-full p-7 text-left hover:-translate-y-1.5",
          isLeft ? "lg:col-start-1" : "lg:col-start-3",
        )}
      >
        <div className="glass-card-overlay" />
        <div className="glass-card-content">
        <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[rgb(var(--color-accent))]">
          {item.date}
        </p>
        <h3 className="mb-1 text-xl font-bold theme-text">{item.role}</h3>
        <p className="mb-5 text-sm theme-muted">
          {item.company} · {item.location}
        </p>
        <ul className="space-y-3 text-sm leading-7 theme-text">
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
      </div>

      <div className="hidden h-full lg:col-start-2 lg:block" />

      <div className={cn("hidden h-full lg:block", isLeft ? "lg:col-start-3" : "lg:col-start-1")} />
    </motion.div>
  );
}
