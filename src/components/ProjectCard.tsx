import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/portfolioData";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="orange-glow mb-3 font-display text-[15px] uppercase tracking-[0.1em]">
        {String(index + 1).padStart(2, "0")} // {project.category}
      </div>
      <h3 className="mb-3 font-mono text-sm font-bold leading-tight tracking-[0.02em] theme-text">
        {project.title}
      </h3>
      <p className="mb-5 font-mono text-[11px] leading-7 theme-muted">{project.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 font-display text-[13px] tracking-[0.05em] text-[rgb(var(--color-line)/0.32)] transition group-hover:text-[rgb(var(--color-accent))]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2 theme-text">
          {project.primaryLinkLabel}
          <ArrowUpRight className="h-4 w-4" />
        </span>
        {project.secondaryLinkUrl ? (
          <span className="inline-flex items-center gap-2 theme-muted">
            <Github className="h-4 w-4" />
            {project.secondaryLinkLabel ?? "GitHub"}
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      className="group h-full"
    >
      <a
        href={project.primaryLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.primaryLinkLabel}: ${project.title}`}
        className="relative flex h-full flex-col bg-[#040404] p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#080808]"
      >
        {cardContent}
      </a>
      {project.secondaryLinkUrl ? (
        <a
          href={project.secondaryLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm theme-muted transition hover:text-[rgb(var(--color-text))]"
        >
          <Github className="h-4 w-4" />
          {project.secondaryLinkLabel ?? "GitHub"}
        </a>
      ) : null}
    </motion.article>
  );
}
