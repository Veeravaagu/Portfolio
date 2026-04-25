import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { SectionHeader } from "../components/SectionHeader";
import { TypeText, useInView } from "../lib/terminalEffects";

export function About() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-shell">
      <div className="section-panel max-w-5xl">
        <SectionHeader index="01" title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto grid max-w-5xl gap-8 p-0 md:grid-cols-[220px_minmax(0,1fr)] md:items-center"
        >
          <div>
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="mx-auto aspect-square w-full max-w-[220px] object-cover grayscale contrast-125"
            />
          </div>
          <div>
            <p className="orange-glow mb-4 font-display text-lg uppercase tracking-[0.1em]">
              PROFILE_RECORD / ACTIVE
            </p>
            <p className="font-mono text-xs leading-8 text-muted sm:text-sm">
              {inView ? (
                <TypeText delay={600} speed={12} inView={inView}>
                  {personalInfo.about}
                </TypeText>
              ) : null}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
