import type { ComponentType } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAuth0,
  SiC,
  SiChartdotjs,
  SiCplusplus,
  SiDocker,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPydantic,
  SiPytest,
  SiPython,
  SiReact,
  SiRender,
  SiRedis,
  SiScikitlearn,
  SiSocketdotio,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiJsonwebtokens,
  SiVercel,
} from "react-icons/si";
import { Bot, CloudCog, ShieldCheck, TerminalSquare } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  active?: boolean;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  primaryLinkLabel: string;
  primaryLinkUrl: string;
  secondaryLinkLabel?: string;
  secondaryLinkUrl?: string;
};

export type SkillItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  accentClass: string;
};

export type SkillCategory = {
  label: string;
  items: SkillItem[];
};

export const personalInfo = {
  name: "Veeravaagu Murugan",
  initials: "VM",
  title: "Software Engineer",
  email: "vishal.m.muurugan@gmail.com",
  linkedIn: "https://www.linkedin.com/in/veeravaagu-murugan/",
  github: "https://github.com/veeravaagu",
  heroIntro: "Hi, I am",
  about:
    "I’m a software engineer focused on backend systems, full-stack applications, and AI-enabled products. I enjoy building software that is reliable, maintainable, and practical — from API-driven platforms and real-time applications to intelligent workflows powered by LLMs. I recently completed my MS in Computer Science at the University at Buffalo, and I’m looking for opportunities where I can contribute to scalable systems, product-quality engineering, and thoughtful user experiences.",
  contactBlurb:
    "Feel free to reach out for collaboration, project work, or just to say hello.",
  contactNote:
    "Use the form below or reach out directly through email, LinkedIn, or GitHub.",
  footerCopy: "© 2025 · All rights reserved",
};

export const contactFormConfig = {
  endpoint: "https://formspree.io/f/xbdqkyaa",
  targetEmail: personalInfo.email,
};

function asSkillIcon(icon: IconType): ComponentType<{ className?: string }> {
  return icon;
}

export const navItems: NavItem[] = [
  { label: "About Me", href: "about" },
  { label: "Portfolio", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedIn,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    date: "Feb 2026 — Present",
    role: "Research Assistant",
    company: "University at Buffalo",
    location: "Buffalo, NY",
    active: true,
    bullets: [
      "Designed and built CSE Pulse as a distributed system of 5 decoupled services, replacing manual email tracking with a centralized, queryable activity platform for 60+ faculty.",
      "Developed a Gmail ingestion pipeline processing 100-150 notifications per run into structured data, eliminating manual aggregation workflows.",
      "Built a FastAPI backend with sub-100ms response latency, enabling real-time querying and reporting for department administrators.",
      "Implemented a storage abstraction layer enabling seamless migration from JSON to PostgreSQL without impacting downstream services.",
    ],
  },
  {
    date: "Sep 2025 — Dec 2025",
    role: "Software Engineer Co-Op",
    company: "EVU",
    location: "New York, NY",
    bullets: [
      "Shipped 6 production features in a 5-engineer team, contributing to a consumer AI platform serving 1,000+ users from a greenfield codebase.",
      "Implemented OAuth2 and JWT-based authentication securing APIs and WebSocket connections, with comprehensive test coverage.",
      "Built real-time WebSocket pipelines delivering live AI job updates, eliminating polling delays for 10-40 second processing workflows.",
      "Developed an interactive AR canvas in React enabling object-level manipulation, forming the core user interaction layer of the platform.",
    ],
  },
  {
    date: "Jul 2021 — May 2022",
    role: "Research Assistant",
    company: "Sri Sivasubramaniya Nadar College of Engineering",
    location: "Chennai, India",
    bullets: [
      "Delivered a field-tested prototype 2 months ahead of a 12-month deadline with embedded software in C converting sensor signals into calibrated depth readings.",
      "Contributed to a government-registered design patent with a 25% efficiency improvement within a $300 subsystem budget.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "healthcare-ai-support-backend",
    title: "Healthcare AI Support Backend",
    category: "AI / Backend",
    description:
      "TypeScript backend for a healthcare-support chat system with REST APIs, WebSocket event paths, OpenAI-powered workflows, and a safety classification layer for distress, self-harm, and medical risk levels.",
    techStack: ["TypeScript", "Node.js", "Express", "OpenAI", "MongoDB", "SQLite"],
    primaryLinkLabel: "View Code",
    primaryLinkUrl: "https://github.com/Veeravaagu/healthcare-support-ai-backend",
  },
  {
    id: "multi-agent-news-digest",
    title: "Multi Agent News Digest",
    category: "Multi-Agent",
    description:
      "LangChain pipeline processing RSS feeds through specialist agents for summarization, entity extraction, and sentiment scoring, with schema-enforced outputs and fallback runtime heuristics.",
    techStack: ["Python", "LangChain", "FastAPI", "Pydantic", "React", "Ollama"],
    primaryLinkLabel: "Live Demo",
    primaryLinkUrl: "https://multi-agent-news-digest.vercel.app",
  },
  {
    id: "third-party-vendor-risk-dashboard",
    title: "Third Party Vendor Risk Dashboard",
    category: "Full-Stack",
    description:
      "Risk dashboard with computed vendor scoring, filterable data views, summary insights, and a recruiter-friendly analytics presentation layer for operational decision-making.",
    techStack: ["Python", "Django", "PostgreSQL", "React", "Vite"],
    primaryLinkLabel: "Live Demo",
    primaryLinkUrl: "https://third-party-vendor-risk-dashboard-1.onrender.com/",
  },
  {
    id: "java-tcp-json-server",
    title: "Java TCP JSON Server",
    category: "Backend / Systems",
    description:
      "A concurrent TCP client-server system built in Java, implementing a custom JSON protocol with structured validation, error handling, and multithreaded request processing.",
    techStack: ["Java", "Maven", "JUnit", "Sockets", "Concurrency"],
    primaryLinkLabel: "View Code",
    primaryLinkUrl: "https://github.com/veeravaagu/java-tcp-json-server-client",
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "Frontend / API",
    description:
      "Weather application with normalized forecast data, responsive visual presentation, and a clean, accessible UI optimized for quick daily planning.",
    techStack: ["React", "TypeScript", "Node.js", "API Integration", "Charting"],
    primaryLinkLabel: "Live Demo",
    primaryLinkUrl: "https://weather-app-taupe-tau-19.vercel.app",
  },
  {
    id: "pulse-eq",
    title: "Pulse EQ",
    category: "Audio / Frontend",
    description:
      "Browser-based parametric equalizer with interactive controls, Web Audio API processing, and a polished UI that balances technical functionality with visual clarity.",
    techStack: ["React", "TypeScript", "Web Audio API", "SVG", "Tailwind CSS"],
    primaryLinkLabel: "Live Demo",
    primaryLinkUrl: "https://pulse-eq.vercel.app/",
  },
  {
    id: "django-blog-web-app",
    title: "Django Blog Web App",
    category: "Full-Stack",
    description:
      "Blog platform built with Django and deployed for public access, focused on clean content presentation, practical backend structure, and maintainable application flow.",
    techStack: ["Python", "Django", "HTML", "CSS", "Deployment"],
    primaryLinkLabel: "Live Demo",
    primaryLinkUrl: "https://django-project-p85n.onrender.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      {
        name: "Python",
        icon: asSkillIcon(SiPython),
        accentClass: "",
      },
      {
        name: "JavaScript",
        icon: asSkillIcon(SiJavascript),
        accentClass: "",
      },
      {
        name: "TypeScript",
        icon: asSkillIcon(SiTypescript),
        accentClass: "",
      },
      {
        name: "C",
        icon: asSkillIcon(SiC),
        accentClass: "",
      },
      {
        name: "C++",
        icon: asSkillIcon(SiCplusplus),
        accentClass: "",
      },
      {
        name: "Java",
        icon: TerminalSquare,
        accentClass: "",
      },
      {
        name: "SQL",
        icon: asSkillIcon(SiPostgresql),
        accentClass: "",
      },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      {
        name: "FastAPI",
        icon: asSkillIcon(SiFastapi),
        accentClass: "",
      },
      {
        name: "Django",
        icon: asSkillIcon(SiDjango),
        accentClass: "",
      },
      {
        name: "Node.js",
        icon: asSkillIcon(SiNodedotjs),
        accentClass: "",
      },
      {
        name: "Express",
        icon: asSkillIcon(SiExpress),
        accentClass: "",
      },
      {
        name: "WebSocket",
        icon: asSkillIcon(SiSocketdotio),
        accentClass: "",
      },
      {
        name: "OAuth2",
        icon: asSkillIcon(SiAuth0),
        accentClass: "",
      },
      {
        name: "JWT",
        icon: asSkillIcon(SiJsonwebtokens),
        accentClass: "",
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: asSkillIcon(SiReact),
        accentClass: "",
      },
      {
        name: "TypeScript",
        icon: asSkillIcon(SiTypescript),
        accentClass: "",
      },
      {
        name: "Tailwind CSS",
        icon: asSkillIcon(SiTailwindcss),
        accentClass: "",
      },
      {
        name: "Chart.js",
        icon: asSkillIcon(SiChartdotjs),
        accentClass: "",
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: asSkillIcon(SiPostgresql),
        accentClass: "",
      },
      {
        name: "MongoDB",
        icon: asSkillIcon(SiMongodb),
        accentClass: "",
      },
      {
        name: "SQLite",
        icon: asSkillIcon(SiSqlite),
        accentClass: "",
      },
      {
        name: "Redis",
        icon: asSkillIcon(SiRedis),
        accentClass: "",
      },
      {
        name: "Supabase",
        icon: asSkillIcon(SiSupabase),
        accentClass: "",
      },
    ],
  },
  {
    label: "AI & Tools",
    items: [
      {
        name: "OpenAI API",
        icon: asSkillIcon(SiOpenai),
        accentClass: "",
      },
      {
        name: "LangChain",
        icon: asSkillIcon(SiLangchain),
        accentClass: "",
      },
      {
        name: "Pydantic",
        icon: asSkillIcon(SiPydantic),
        accentClass: "",
      },
      {
        name: "scikit-learn",
        icon: asSkillIcon(SiScikitlearn),
        accentClass: "",
      },
      {
        name: "XGBoost",
        icon: Bot,
        accentClass: "",
      },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      {
        name: "Docker",
        icon: asSkillIcon(SiDocker),
        accentClass: "",
      },
      {
        name: "GitHub Actions",
        icon: asSkillIcon(SiGithubactions),
        accentClass: "",
      },
      {
        name: "AWS",
        icon: CloudCog,
        accentClass: "",
      },
      {
        name: "Render",
        icon: asSkillIcon(SiRender),
        accentClass: "",
      },
      {
        name: "Vercel",
        icon: asSkillIcon(SiVercel),
        accentClass: "",
      },
      {
        name: "Linux",
        icon: asSkillIcon(SiLinux),
        accentClass: "",
      },
    ],
  },
  {
    label: "Testing",
    items: [
      {
        name: "pytest",
        icon: asSkillIcon(SiPytest),
        accentClass: "",
      },
      {
        name: "Jest",
        icon: asSkillIcon(SiJest),
        accentClass: "",
      },
      {
        name: "JUnit",
        icon: ShieldCheck,
        accentClass: "",
      },
      {
        name: "Playwright",
        icon: ShieldCheck,
        accentClass: "",
      },
    ],
  },
];
