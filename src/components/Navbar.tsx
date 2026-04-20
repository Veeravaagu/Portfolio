import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "../data/portfolioData";
import { cn, scrollToId } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header className="theme-navbar sticky top-0 z-50 border-b border-line backdrop-blur-2xl">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="theme-nav-link flex items-center theme-text"
          aria-label="Scroll to top"
        >
          <img
            src="/vm-logo.png"
            alt="VM Logo"
            className="h-10 w-10 object-contain rounded-full transition-transform duration-200 hover:scale-105"
          />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn-primary theme-interactive rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]"
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
            className="theme-btn-secondary theme-interactive rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em]"
          >
            Contact Me
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="theme-btn-secondary theme-icon-button rounded-full border p-2 theme-text"
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
              className="theme-btn-primary theme-interactive rounded-full border px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.12em]"
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
              className="theme-btn-secondary theme-interactive rounded-full border px-4 py-3 text-xs font-medium uppercase tracking-[0.12em]"
            >
              Contact Me
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
