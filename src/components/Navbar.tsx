import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "../data/portfolioData";
import { cn, scrollToId } from "../lib/utils";

type AccentMode = "blue" | "red";

function VmLogo() {
  return (
    <svg
      className="h-7 w-7 text-[rgb(var(--color-accent))]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <rect width="120" height="120" fill="#000" />
      <line x1="18" y1="28" x2="42" y2="86" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <line x1="42" y1="86" x2="60" y2="46" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <line x1="60" y1="46" x2="60" y2="86" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <line x1="60" y1="46" x2="78" y2="68" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <line x1="78" y1="68" x2="96" y2="46" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <line x1="96" y1="46" x2="96" y2="86" stroke="#fff" strokeWidth="6" strokeLinecap="square" />
      <circle cx="108" cy="28" r="5" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [accentMode, setAccentMode] = useState<AccentMode>(() => {
    if (typeof window === "undefined") return "blue";
    return window.localStorage.getItem("vm-accent") === "red" ? "red" : "blue";
  });

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((item) => item.href), "contact"];

    const onScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = "hero";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.accent = accentMode;
    window.localStorage.setItem("vm-accent", accentMode);
  }, [accentMode]);

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header className="theme-navbar sticky top-0 z-50 border-b border-[rgb(var(--color-accent)/0.22)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="theme-nav-link flex items-center theme-text"
          aria-label="Scroll to top"
        >
          <VmLogo />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn-primary theme-interactive rounded-md border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]"
          >
            Resume
          </a>
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "theme-nav-link px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]",
                activeSection === item.href
                  ? "theme-text"
                  : "theme-muted hover:text-[rgb(var(--color-accent))]",
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="theme-btn-secondary theme-interactive rounded-md border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]"
          >
            Contact Me
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={accentMode === "red"}
            aria-label="Toggle red accent theme"
            onClick={() => setAccentMode((current) => (current === "blue" ? "red" : "blue"))}
            className="theme-btn-secondary theme-interactive ml-2 flex h-9 w-[58px] items-center rounded-md border px-1"
            title={accentMode === "red" ? "Switch to blue" : "Switch to red"}
          >
            <span
              className={cn(
                "h-6 w-6 rounded-sm bg-[rgb(var(--color-accent))] shadow-[0_0_16px_rgb(var(--color-accent)/0.55)] transition-transform duration-200",
                accentMode === "red" ? "translate-x-6" : "translate-x-0",
              )}
            />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="theme-btn-secondary theme-icon-button rounded-md border border-[rgb(var(--color-accent)/0.5)] p-2 theme-text"
            style={{ boxShadow: "0 0 16px rgb(var(--color-accent) / 0.18)" }}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X className="theme-button-icon theme-button-icon-menu h-5 w-5" />
            ) : (
              <Menu className="theme-button-icon theme-button-icon-menu h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="theme-navbar border-t border-line px-6 py-4 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="theme-btn-primary theme-interactive rounded-md border px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.12em]"
            >
              Resume
            </a>
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "theme-nav-link rounded-md px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]",
                  activeSection === item.href
                    ? "bg-[rgb(var(--color-text)/0.08)] theme-text"
                    : "theme-muted hover:text-[rgb(var(--color-accent))]",
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="theme-btn-secondary theme-interactive rounded-md border px-4 py-3 text-xs font-medium uppercase tracking-[0.12em]"
            >
              Contact Me
            </button>
            <button
              type="button"
              role="switch"
              aria-checked={accentMode === "red"}
              onClick={() => setAccentMode((current) => (current === "blue" ? "red" : "blue"))}
              className="theme-btn-secondary theme-interactive flex items-center justify-between rounded-md border px-4 py-3 text-xs font-medium uppercase tracking-[0.12em]"
            >
              Accent
              <span className="flex h-6 w-[46px] items-center rounded-sm bg-[rgb(var(--color-accent)/0.1)] px-1">
                <span
                  className={cn(
                    "h-4 w-4 rounded-sm bg-[rgb(var(--color-accent))] transition-transform duration-200",
                    accentMode === "red" ? "translate-x-6" : "translate-x-0",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
