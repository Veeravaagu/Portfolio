import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { scrollToId } from "../lib/utils";
import { SocialLinks } from "../components/SocialLinks";
import { useScramble } from "../lib/terminalEffects";

export function Hero() {
  const line1 = useScramble("VEERAVAAGU", { delay: 300, duration: 1500 });
  const line2 = useScramble("MURUGAN", { delay: 780, duration: 1300 });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!line1.done || !line2.done) return;
    const timeoutId = window.setTimeout(() => setShowDetails(true), 180);
    return () => window.clearTimeout(timeoutId);
  }, [line1.done, line2.done]);

  return (
    <section id="hero" className="theme-hero relative min-h-screen overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.58)_100%)]" />
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />
      <div className="absolute left-6 top-24 hidden font-display text-base uppercase tracking-[0.1em] text-[rgb(var(--color-accent))] sm:block lg:left-12">
        &gt; SYSTEM_ONLINE // IDENTITY_LOADED
      </div>
      <div className="absolute right-6 top-24 hidden font-display text-base uppercase tracking-[0.08em] text-[rgb(var(--color-line)/0.2)] sm:block lg:right-12">
        [UPTIME: 00:00:01]
      </div>
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-16">
        <div className="flex w-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-[1] w-full max-w-6xl overflow-hidden px-0 py-10 text-center"
          >
            <p className="orange-glow mb-7 font-mono text-xs uppercase tracking-[0.22em] sm:text-sm">
              {">"} {personalInfo.heroIntro}
            </p>
            <h1 className="white-glow theme-text mb-6 min-w-0 font-mono text-[clamp(2.75rem,7.5vw,6rem)] font-bold uppercase leading-[0.92] tracking-[0.02em]">
              {line1.text}
              <br />
              <span className="orange-glow">{line2.text}</span>
              {!line2.done ? <span className="terminal-cursor">_</span> : null}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showDetails ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="theme-muted mb-12 font-display text-2xl uppercase tracking-[0.18em]"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mb-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-primary theme-interactive inline-flex items-center gap-3 rounded-sm border px-8 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em]"
              >
                <Download className="theme-button-icon theme-button-icon-download h-4 w-4" />
                View Resume
              </a>
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="theme-btn-secondary theme-interactive inline-flex items-center gap-3 rounded-sm border px-8 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em]"
              >
                Contact Me
                <ArrowRight className="theme-button-icon h-4 w-4" />
              </button>
            </motion.div>

            <SocialLinks className="justify-center" />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 right-6 hidden justify-between font-display text-[15px] uppercase tracking-[0.08em] text-[rgb(var(--color-line)/0.15)] md:flex lg:left-12 lg:right-12">
        <span>MEM: 64KB FREE</span>
        <span>SECTOR: HERO_0x00</span>
        <span>STATUS: ACTIVE</span>
      </div>
    </section>
  );
}
