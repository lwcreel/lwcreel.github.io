# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website and blog for Landon Creel, built with Next.js (App Router), TypeScript, and React Bootstrap, deployed as a fully static site to GitHub Pages.

## Commands

- `npm install` — install dependencies (Node 24, per `.nvmrc`)
- `npm run dev` — local dev server
- `npm run build` — static export to `./out` (this is also what CI runs; use it to catch type/build errors)

There is no test suite or linter configured.

## Architecture

- **Static export only.** `next.config.js` sets `output: "export"` and unoptimized images. Anything requiring a server at runtime (API routes, server actions, dynamic rendering without `generateStaticParams`, `next/image` optimization) will break the build/deploy.
- **Deployment:** `.github/workflows/nextjs.yml` runs on push to `main` (or manually), runs `next build`, and publishes `./out` to GitHub Pages. `.nojekyll` must stay so `_next/` assets are served.
- **Blog pipeline:** Posts are Markdown files in `posts/` with gray-matter frontmatter (`title`, `date` as `"YYYY-MM-DD"`). The filename (minus `.md`) is the URL slug at `/blog/<id>`. `src/lib/posts.ts` reads them from disk at build time (only `*.md` files), fails the build with the filename if `title` or a quoted `date` is missing, and converts Markdown to HTML with remark/remark-html. It also defines the `PostMeta` / `Post` / `PostList` types used everywhere else; only `title`, `date` and `description` are read from frontmatter, so a new field must be added to `PostMeta` and `readPost()`.
  - `getSortedPostsData()` returns a `PostList` (`{ posts, pageCount, postsPerPage }`) — consumed by the client component `src/app/blog/render-blog.tsx`, which must import from `posts.ts` with `import type` only (the module uses `fs`). It paginates client-side from the `?page=N` query string. Because that uses `useSearchParams`, `src/app/blog/page.tsx` wraps it in `<Suspense>` with page 1 as the fallback, which is what ends up in the static HTML.
  - `src/app/blog/[id]/page.tsx` uses `generateStaticParams` over `getAllPostIds()` to pre-render every post.
  - A post's `description` (link previews, RSS) is its optional frontmatter `description`, else its first paragraph.
  - `src/app/sitemap.ts` and `src/app/feed.xml/route.ts` (RSS) are generated at build time; both need `export const dynamic = "force-static"` to work with the static export. The site's public URL lives in `src/lib/site.ts`.
- **Pages:** each route in `src/app/` has a thin `page.tsx` (sets `metadata` with just the page name, e.g. `title: "Blog"`; the root layout's template turns it into `"Landon Creel | Blog"`) that renders a separate component (`home-page.tsx`, `render-blog.tsx`, `render-page.tsx`). Page bodies are wrapped in `src/components/layout.tsx`.
- **Root layout** (`src/app/layout.tsx`) imports Bootstrap CSS from the `bootstrap` npm package, renders the navbar/footer, and Google Analytics.
- **Styles:** CSS modules live in the top-level `styles/` directory (not under `src/`), imported via relative paths. Static assets (resume PDF, images) are in `public/`.
