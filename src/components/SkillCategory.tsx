import { motion } from "framer-motion";
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
      <p className="orange-glow mb-6 text-center font-display text-lg uppercase tracking-[0.1em]">
        {category.label}
      </p>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-x-10 sm:gap-y-6">
        {category.items.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex w-[88px] flex-col items-center gap-2 transition duration-300 hover:-translate-y-1.5"
          >
            <div
              className="theme-text flex h-12 w-12 items-center justify-center bg-transparent text-[rgb(var(--color-line)/0.45)] transition duration-300 group-hover:text-[rgb(var(--color-accent))]"
            >
              <Icon className="h-6 w-6 transition duration-300" />
            </div>
            <span
              className="theme-muted text-center font-display text-[14px] uppercase tracking-[0.08em] transition duration-300 group-hover:text-[rgb(var(--color-accent))]"
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
