import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type SectionHeaderProps = {
  title: string;
  className?: string;
  framed?: boolean;
};

export function SectionHeader({
  title,
  className,
  framed = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("mb-14 text-center", className)}
    >
      <h2
        className={cn(
          "theme-text text-3xl font-bold uppercase tracking-[0.14em] sm:text-4xl",
          framed &&
            "inline-block rounded-full border px-8 py-2 text-2xl sm:text-3xl",
        )}
        style={
          framed
            ? {
                borderColor: "rgb(var(--color-accent) / 0.28)",
                backgroundColor: "rgb(var(--color-surface) / 0.2)",
              }
            : undefined
        }
      >
        {title}
      </h2>
      {!framed ? (
        <div
          className="mx-auto mt-4 h-[2px] w-14 rounded-full"
          style={{ backgroundImage: "var(--heading-underline)" }}
        />
      ) : (
        <div className="mt-4" />
      )}
    </motion.div>
  );
}
