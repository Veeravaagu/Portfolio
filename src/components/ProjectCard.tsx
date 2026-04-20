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
      <div className="theme-dim mb-4 font-mono text-xs uppercase tracking-[0.14em]">
        {String(index + 1).padStart(2, "0")} — {project.category}
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight theme-text">
        {project.title}
      </h3>
      <p className="mb-5 text-sm leading-7 theme-muted">{project.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[rgb(var(--color-line)/0.12)] bg-[rgb(var(--color-line)/0.04)] px-3 py-1 text-xs font-medium text-[rgb(var(--color-accent))]"
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
        className="glass-card glass-card-black glass-card-project relative flex h-full flex-col p-6 hover:-translate-y-2"
      >
        <div className="glass-card-overlay" />
        <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rotate-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] opacity-60 blur-2xl" />
        <div className="glass-card-content">{cardContent}</div>
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
