import { projects } from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-panel">
        <SectionHeader index="02" title="Portfolio" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
