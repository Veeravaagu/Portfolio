import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import type { SkillCategory as SkillCategoryType } from "../data/portfolioData";

type SkillCategoryProps = {
  category: SkillCategoryType;
  index: number;
};

export function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="mb-12 last:mb-0"
    >
      <p className="theme-muted mb-6 text-center font-mono text-xs font-bold uppercase tracking-[0.22em]">
        {category.label}
      </p>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-x-10 sm:gap-y-6">
        {category.items.map(({ name, icon: Icon, accentClass }) => (
          <div
            key={name}
            className="group flex w-[88px] flex-col items-center gap-2 transition duration-300 hover:-translate-y-1.5"
          >
            <div
              className={cn(
                "theme-text flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-surface transition duration-300",
                accentClass,
              )}
            >
              <Icon className="h-6 w-6 transition duration-300" />
            </div>
            <span
              className={cn(
                "theme-muted text-center font-mono text-[11px] uppercase tracking-[0.08em] transition duration-300 group-hover:text-[rgb(var(--color-text))]",
                accentClass,
              )}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
