# personal-website

My personal portfolio site — built to showcase the projects I've worked on and the journey behind them.

Live site source lives in [`website/`](./website).

## Stack

- **[Astro 6](https://astro.build)** with View Transitions (`ClientRouter`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, no `tailwind.config.js`)
- **TypeScript** (strict)
- **React 19** via `@astrojs/react` for interactive islands
- **GSAP** for animation, **Lucide** for icons
- Deployed via **Cloudflare** (`wrangler.toml`)

## Structure

```
website/
├── src/
│   ├── components/     # HeroSection, SkillsSection, ProjectsSection, JourneySection, …
│   ├── data/projects.ts  # single source of truth for all project content
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/[slug].astro   # SSG project detail pages
│   ├── layouts/Layout.astro
│   └── styles/global.css
├── public/
└── astro.config.mjs
```

Adding a project = appending an entry to `src/data/projects.ts`. `getStaticPaths()` in `[slug].astro` builds the detail routes at compile time.

## Commands

Run from `website/`:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Install dependencies                         |
| `bun dev`         | Start dev server at `localhost:4321`         |
| `bun build`       | Build to `./dist/`                           |
| `bun preview`     | Preview the production build                 |
| `bun astro check` | Type-check `.astro` files                    |

Requires Node `>=22.12.0`.
