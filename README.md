# Veeravaagu Murugan Portfolio

Production-ready personal portfolio built to present projects, experience, and technical strengths through a fast, polished single-page interface.

## Live Demo

[View Live Site](https://your-portfolio-domain.com)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Features

- Responsive single-page portfolio layout
- Dark and light theme support with a polished, Apple-inspired UI direction
- Smooth in-page navigation
- Section reveal and motion-driven transitions
- Interactive project showcase with live/demo links
- Experience timeline
- Skills section with technology icons
- Contact form powered by Formspree
- Downloadable resume
- Component-based frontend architecture

## Project Structure

```text
.
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ExperienceCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SkillCategory.tsx
│   │   └── SocialLinks.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

```bash
git clone <your-repo-url>
cd Portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is set up for straightforward deployment on Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Use the default Vite settings:

```text
Build Command: npm run build
Output Directory: dist
```

4. Deploy.

## Customization

- Update portfolio content in `src/data/portfolioData.ts`
- Adjust global styles and theme tokens in `src/index.css`
- Replace the resume file in `public/resume.pdf`
- Update section-level UI in `src/sections/*`
- Update reusable UI components in `src/components/*`

## Contact

- Email: [vishal.m.muurugan@gmail.com](mailto:vishal.m.muurugan@gmail.com)
- LinkedIn: [linkedin.com/in/veeravaagu-murugan](https://www.linkedin.com/in/veeravaagu-murugan/)
- GitHub: [github.com/veeravaagu](https://github.com/veeravaagu)

## Notes

- The site is intentionally structured around data-driven content and reusable sections to keep updates simple.
- Motion is used sparingly to improve flow and responsiveness without overwhelming the content.
- The project is designed to function as both a professional portfolio and a focused frontend engineering sample.
