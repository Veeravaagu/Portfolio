import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { SectionHeader } from "../components/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-panel max-w-5xl">
        <SectionHeader title="About Me" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center text-lg leading-9 text-muted sm:text-[1.15rem]"
        >
          {personalInfo.about}
        </motion.p>
      </div>
    </section>
  );
}
