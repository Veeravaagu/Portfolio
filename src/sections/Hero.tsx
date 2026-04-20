import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { scrollToId } from "../lib/utils";
import { SocialLinks } from "../components/SocialLinks";

export function Hero() {
  return (
    <section
      id="hero"
      className="theme-hero min-h-[calc(100vh-68px)]"
      aria-label="Hero section"
    >
      <div className="mx-auto flex min-h-[calc(100vh-68px)] max-w-7xl items-center justify-center px-6 py-16 sm:px-8 lg:px-16">
        <div className="flex w-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-center"
          >
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[rgb(var(--color-accent))]">
              {personalInfo.heroIntro}
            </p>
            <h1 className="theme-text mb-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Veeravaagu
              <br />
              Murugan
            </h1>
            <p className="theme-muted mb-10 font-mono text-sm uppercase tracking-[0.14em]">
              {personalInfo.title}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-primary theme-interactive inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold"
              >
                <Download className="theme-button-icon theme-button-icon-download h-4 w-4" />
                View Resume
              </a>
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="theme-btn-secondary theme-interactive inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold"
              >
                Contact Me
                <ArrowRight className="theme-button-icon h-4 w-4" />
              </button>
            </div>

            <SocialLinks className="justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
