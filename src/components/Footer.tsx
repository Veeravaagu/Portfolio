import { personalInfo } from "../data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/70 px-6 py-6 sm:px-8 lg:px-16">
      <div className="theme-dim mx-auto flex max-w-7xl items-center justify-center text-center text-sm">
        <span>{personalInfo.footerCopy}</span>
      </div>
    </footer>
  );
}
