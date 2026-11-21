# lwcreel.github.io

My personal website and blog, built with Next.js, TypeScript, and React Bootstrap, and deployed as a static site to GitHub Pages at https://lwcreel.github.io.

## Prerequisites

- Node.js 20 or later (see `.nvmrc`)

## Development

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Build

```sh
npm run build
```

This produces a static export in `./out`.

## Writing a blog post

Add a Markdown file to `posts/`. The filename becomes the URL (`posts/my-post.md` → `/blog/my-post`). Each post needs frontmatter:

```md
---
title: "My Post"
date: "2026-01-21"
---
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/nextjs.yml`, which builds the site and publishes `./out` to GitHub Pages. It can also be run manually from the Actions tab.

## Author

**Landon Creel**

- Website: https://lwcreel.github.io
- GitHub: [@lwcreel](https://github.com/lwcreel)
- LinkedIn: [Landon Creel](https://linkedin.com/in/landon-creel-149859177)
