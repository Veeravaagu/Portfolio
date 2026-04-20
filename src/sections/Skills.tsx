import { skillCategories } from "../data/portfolioData";
import { SkillCategory } from "../components/SkillCategory";
import { SectionHeader } from "../components/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="theme-ambient section-shell bg-panel">
      <div className="section-panel mx-auto max-w-6xl">
        <SectionHeader title="Skills" />
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.label} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
