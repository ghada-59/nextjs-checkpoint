# Next.js Portfolio Website Checkpoint

A complete, responsive portfolio website built with **Next.js, React, and TypeScript**. It includes Home, About, Projects, and Contact pages, shared navigation, local project visuals, CSS styling, and a request-time Server-Side Rendering (SSR) example.

## 1. Tech stack

- Next.js 16.4.6
- React 19.3.1
- TypeScript
- Next.js Pages Router (file-based routing)
- CSS Modules are not required here; shared and page styling is maintained in `styles/globals.css`
- `next/image` for project and hero images
- `getServerSideProps` for request-time server-side rendering

## 2. Getting started

**Requirements:** Node.js 20.9 or newer and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Production build

```bash
# Check TypeScript types
npm run typecheck

# Create an optimized production build
npm run build

# Run the production server locally
npm start
```

The production output is generated in `.next/`.

## 4. Project structure

```text
nextjs-portfolio-checkpoint/
├── components/
│   ├── ProjectCard.tsx       # Reusable project card
│   ├── SectionHeading.tsx    # Reusable section heading
│   └── SiteLayout.tsx        # Shared header, navigation, footer and page metadata
│
├── data/
│   ├── projects.ts           # Typed project information
│   └── site.ts               # Portfolio name, links and contact settings
│
├── pages/
│   ├── _app.tsx              # Shared app entry; imports global CSS
│   ├── _document.tsx         # HTML document and language
│   ├── index.tsx             # Home page + getServerSideProps SSR example
│   ├── about.tsx             # About page
│   ├── projects.tsx          # Projects page
│   ├── contact.tsx           # Contact page
│   └── 404.tsx               # Custom not-found page
│
├── public/
│   ├── favicon.svg
│   └── images/               # Local SVG illustrations used by next/image
│
├── styles/
│   └── globals.css           # Global responsive styling
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json         # Created by npm install; commit this file
├── tsconfig.json
└── README.md
```

## 5. How the checkpoint requirements are covered

### Getting started with Next.js

The project is configured with `create-next-app`-style structure and includes `package.json`, `next.config.ts`, and `tsconfig.json`. Run `npm install` to install its dependencies.

### Styling and images

- The shared visual system and responsive page styles are in `styles/globals.css`.
- Reusable layout and project components are in `components/`.
- Project and hero illustrations are stored locally in `public/images/`.
- The `next/image` component is used to display the local SVG images.

### Page-based routing

The Pages Router automatically maps files in `pages/` to URL paths:

| File | URL |
|---|---|
| `pages/index.tsx` | `/` |
| `pages/about.tsx` | `/about` |
| `pages/projects.tsx` | `/projects` |
| `pages/contact.tsx` | `/contact` |

### Server-side rendering

The Home page exports `getServerSideProps`. This function runs on the server for each request and passes a server-generated timestamp to the page. The timestamp is displayed near the bottom of the Home page as a visible SSR demonstration.

## 6. Personalize before publishing

1. Open `data/site.ts`.
2. Replace `YOUR_EMAIL@example.com` with the email address you want to publish. The Contact page uses this setting for its `mailto:` link.
3. Review your name, role, GitHub link and availability wording.
4. Review project descriptions and update any project status or repository links to match the exact work you want to show.
5. Do not publish private contact details, credentials, API keys or `.env` files.

The portfolio uses an initials-based graphic rather than a personal photograph. All project visuals are local decorative illustrations, not real medical scans or clinical results.

## 7. GitHub setup

The project includes a `.gitignore` that excludes `node_modules/`, `.next/`, `out/`, environment files, logs, editor folders and other generated files.

**Keep these files tracked:** `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, source files, assets and `README.md`.

```bash
git init
git add .
git status
git commit -m "Build Next.js portfolio checkpoint"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nextjs-portfolio-checkpoint.git
git push -u origin main
```

Before committing, inspect `git status` and make sure `.env` files, `node_modules/` and `.next/` are not staged.

## 8. Deployment

The project can be deployed to Vercel:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings (`npm run build`).
4. Deploy the project.
5. Add any required environment variables only in the hosting provider's environment-variable settings, never in GitHub.

---

**Checkpoint note:** This project intentionally uses the Pages Router so the `pages/` routes and `getServerSideProps` SSR example are easy to identify and explain during the checkpoint.
