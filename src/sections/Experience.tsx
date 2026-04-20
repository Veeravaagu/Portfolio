import { experienceItems } from "../data/portfolioData";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeader } from "../components/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="theme-ambient section-shell bg-panel">
      <div className="section-panel max-w-6xl">
        <SectionHeader title="Experience" />
        <div className="relative mx-auto max-w-6xl space-y-8 lg:space-y-10">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            style={{ backgroundImage: "var(--timeline-line)" }}
          />
          {experienceItems.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
