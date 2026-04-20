import { personalInfo, socialLinks } from "../data/portfolioData";
import { cn } from "../lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => {
        const isEmail = href.startsWith("mailto:");

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className={cn(
              "theme-btn-secondary theme-icon-button theme-text flex h-11 w-11 items-center justify-center rounded-full border hover:text-[rgb(var(--color-text))]",
            )}
          >
            <Icon className="theme-button-icon h-5 w-5" />
            <span className="sr-only">
              {label} for {personalInfo.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
