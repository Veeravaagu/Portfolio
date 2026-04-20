import type { ComponentType } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiChartdotjs,
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
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPydantic,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { AudioWaveform, Bot, Braces, CloudCog, Database, GraduationCap, ShieldCheck, TerminalSquare } from "lucide-react";

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
  { label: "Experience", href: "experience" },
  { label: "Portfolio", href: "projects" },
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
      "Architected CSE Pulse, a faculty activity monitoring system, as 5+ decoupled Python services enabling parallel development across a 4-engineer team.",
      "Engineered a Gmail API ingestion pipeline processing 100–150+ activity records per run with fault-tolerant error handling and adapter-based mock and live modes.",
      "Built a FastAPI backend with 5 production-ready endpoints at under 100ms response latency supporting ingestion triggers, activity retrieval, and system health monitoring.",
      "Reduced manual tracking effort by 80–90% through automated ingestion and enrichment workflows supporting real-time dashboard integration.",
    ],
  },
  {
    date: "Sep 2025 — Dec 2025",
    role: "Software Engineer Co-Op",
    company: "EVU",
    location: "New York, NY",
    bullets: [
      "Delivered 6 features for RealIDream across a React TypeScript frontend, Node.js APIs, and real-time job status updates via WebSockets for 1,000+ users.",
      "Implemented OAuth 2.0 and JWT authentication including Google login, protected route middleware, and 80%+ Jest unit test coverage on the auth module.",
      "Built AWS S3 file upload via pre-signed URLs, PostgreSQL schema migrations, and Playwright E2E tests covering login, upload, and result workflows.",
      "Integrated WebRTC peer connections to stream live camera input to backend, rendering AI-processed frames to HTML canvas in near real-time.",
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
        accentClass:
          "group-hover:border-yellow-300/35 group-hover:bg-gradient-to-br group-hover:from-yellow-400/10 group-hover:to-blue-400/10 group-hover:text-yellow-100 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.16)]",
      },
      {
        name: "JavaScript",
        icon: asSkillIcon(SiJavascript),
        accentClass:
          "group-hover:border-amber-300/35 group-hover:bg-amber-300/10 group-hover:text-amber-100 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.16)]",
      },
      {
        name: "TypeScript",
        icon: asSkillIcon(SiTypescript),
        accentClass:
          "group-hover:border-blue-400/40 group-hover:bg-blue-400/10 group-hover:text-blue-100 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.18)]",
      },
      {
        name: "C++17",
        icon: TerminalSquare,
        accentClass:
          "group-hover:border-slate-300/35 group-hover:bg-slate-300/10 group-hover:text-slate-100 group-hover:shadow-[0_0_20px_rgba(148,163,184,0.12)]",
      },
      {
        name: "Java",
        icon: GraduationCap,
        accentClass:
          "group-hover:border-orange-400/35 group-hover:bg-orange-400/10 group-hover:text-orange-100 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.16)]",
      },
      {
        name: "SQL",
        icon: Database,
        accentClass:
          "group-hover:border-zinc-300/35 group-hover:bg-zinc-300/10 group-hover:text-zinc-100 group-hover:shadow-[0_0_18px_rgba(244,244,245,0.12)]",
      },
    ],
  },
  {
    label: "AI & Agents",
    items: [
      {
        name: "OpenAI API",
        icon: asSkillIcon(SiOpenai),
        accentClass:
          "group-hover:border-emerald-300/35 group-hover:bg-emerald-300/10 group-hover:text-emerald-100 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.16)]",
      },
      {
        name: "LangChain",
        icon: asSkillIcon(SiLangchain),
        accentClass:
          "group-hover:border-lime-300/35 group-hover:bg-lime-300/10 group-hover:text-lime-100 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.16)]",
      },
      {
        name: "Pydantic",
        icon: asSkillIcon(SiPydantic),
        accentClass:
          "group-hover:border-violet-300/35 group-hover:bg-violet-300/10 group-hover:text-violet-100 group-hover:shadow-[0_0_20px_rgba(196,181,253,0.15)]",
      },
      {
        name: "scikit-learn",
        icon: Bot,
        accentClass:
          "group-hover:border-red-300/35 group-hover:bg-red-300/10 group-hover:text-red-100 group-hover:shadow-[0_0_20px_rgba(252,165,165,0.15)]",
      },
      {
        name: "XGBoost",
        icon: Bot,
        accentClass:
          "group-hover:border-orange-300/35 group-hover:bg-orange-300/10 group-hover:text-orange-100 group-hover:shadow-[0_0_20px_rgba(253,186,116,0.16)]",
      },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      {
        name: "FastAPI",
        icon: asSkillIcon(SiFastapi),
        accentClass:
          "group-hover:border-teal-300/35 group-hover:bg-teal-300/10 group-hover:text-teal-100 group-hover:shadow-[0_0_20px_rgba(94,234,212,0.16)]",
      },
      {
        name: "Django",
        icon: asSkillIcon(SiDjango),
        accentClass:
          "group-hover:border-green-400/35 group-hover:bg-green-400/10 group-hover:text-green-100 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.16)]",
      },
      {
        name: "Node.js",
        icon: asSkillIcon(SiNodedotjs),
        accentClass:
          "group-hover:border-lime-300/35 group-hover:bg-lime-300/10 group-hover:text-lime-100 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.16)]",
      },
      {
        name: "Express.js",
        icon: asSkillIcon(SiExpress),
        accentClass:
          "group-hover:border-zinc-300/35 group-hover:bg-zinc-300/10 group-hover:text-zinc-100 group-hover:shadow-[0_0_18px_rgba(244,244,245,0.1)]",
      },
      {
        name: "REST / WebSocket",
        icon: asSkillIcon(SiWebrtc),
        accentClass:
          "group-hover:border-sky-300/35 group-hover:bg-sky-300/10 group-hover:text-sky-100 group-hover:shadow-[0_0_20px_rgba(125,211,252,0.15)]",
      },
      {
        name: "OAuth 2.0 / JWT",
        icon: ShieldCheck,
        accentClass:
          "group-hover:border-rose-300/35 group-hover:bg-rose-300/10 group-hover:text-rose-100 group-hover:shadow-[0_0_20px_rgba(253,164,175,0.16)]",
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: asSkillIcon(SiReact),
        accentClass:
          "group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 group-hover:text-cyan-100 group-hover:shadow-[0_0_22px_rgba(103,232,249,0.18)]",
      },
      {
        name: "Tailwind CSS",
        icon: asSkillIcon(SiTailwindcss),
        accentClass:
          "group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-cyan-100 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.18)]",
      },
      {
        name: "Chart.js",
        icon: asSkillIcon(SiChartdotjs),
        accentClass:
          "group-hover:border-fuchsia-300/35 group-hover:bg-fuchsia-300/10 group-hover:text-fuchsia-100 group-hover:shadow-[0_0_20px_rgba(240,171,252,0.16)]",
      },
      {
        name: "Web Audio API",
        icon: AudioWaveform,
        accentClass:
          "group-hover:border-purple-300/35 group-hover:bg-purple-300/10 group-hover:text-purple-100 group-hover:shadow-[0_0_20px_rgba(216,180,254,0.16)]",
      },
      {
        name: "Playwright",
        icon: ShieldCheck,
        accentClass:
          "group-hover:border-emerald-300/35 group-hover:bg-emerald-300/10 group-hover:text-emerald-100 group-hover:shadow-[0_0_20px_rgba(110,231,183,0.16)]",
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: asSkillIcon(SiPostgresql),
        accentClass:
          "group-hover:border-sky-400/35 group-hover:bg-slate-400/10 group-hover:text-sky-100 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.16)]",
      },
      {
        name: "MongoDB",
        icon: asSkillIcon(SiMongodb),
        accentClass:
          "group-hover:border-green-400/35 group-hover:bg-green-400/10 group-hover:text-green-100 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.16)]",
      },
      {
        name: "Redis",
        icon: asSkillIcon(SiRedis),
        accentClass:
          "group-hover:border-rose-400/35 group-hover:bg-rose-400/10 group-hover:text-rose-100 group-hover:shadow-[0_0_20px_rgba(251,113,133,0.16)]",
      },
      {
        name: "SQLite / Supabase",
        icon: Braces,
        accentClass:
          "group-hover:border-zinc-300/35 group-hover:bg-zinc-300/10 group-hover:text-zinc-100 group-hover:shadow-[0_0_20px_rgba(244,244,245,0.12)]",
      },
      {
        name: "MySQL",
        icon: asSkillIcon(SiMysql),
        accentClass:
          "group-hover:border-cyan-300/35 group-hover:bg-cyan-300/10 group-hover:text-cyan-100 group-hover:shadow-[0_0_20px_rgba(103,232,249,0.16)]",
      },
    ],
  },
  {
    label: "Infrastructure & Testing",
    items: [
      {
        name: "AWS S3 / IAM",
        icon: CloudCog,
        accentClass:
          "group-hover:border-orange-400/35 group-hover:bg-orange-400/10 group-hover:text-orange-100 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.16)]",
      },
      {
        name: "Docker",
        icon: asSkillIcon(SiDocker),
        accentClass:
          "group-hover:border-blue-400/35 group-hover:bg-blue-400/10 group-hover:text-blue-100 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.16)]",
      },
      {
        name: "GitHub Actions",
        icon: asSkillIcon(SiGithubactions),
        accentClass:
          "group-hover:border-indigo-300/35 group-hover:bg-indigo-300/10 group-hover:text-indigo-100 group-hover:shadow-[0_0_20px_rgba(165,180,252,0.16)]",
      },
      {
        name: "pytest / Jest",
        icon: asSkillIcon(SiJest),
        accentClass:
          "group-hover:border-emerald-300/35 group-hover:bg-emerald-300/10 group-hover:text-emerald-100 group-hover:shadow-[0_0_20px_rgba(110,231,183,0.16)]",
      },
      {
        name: "Playwright",
        icon: ShieldCheck,
        accentClass:
          "group-hover:border-green-300/35 group-hover:bg-green-300/10 group-hover:text-green-100 group-hover:shadow-[0_0_20px_rgba(134,239,172,0.16)]",
      },
      {
        name: "Linux / CMake",
        icon: asSkillIcon(SiLinux),
        accentClass:
          "group-hover:border-stone-300/35 group-hover:bg-stone-300/10 group-hover:text-stone-100 group-hover:shadow-[0_0_20px_rgba(214,211,209,0.12)]",
      },
    ],
  },
];
