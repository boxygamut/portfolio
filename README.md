# Personal Portfolio

A fast, minimal portfolio site built with [Astro](https://astro.build). Ships zero
JavaScript by default and outputs pure static HTML/CSS. Light/dark themes follow the
visitor's OS automatically.

## Editing your content

**All content lives in one file:** [`src/data/site.ts`](src/data/site.ts).

Edit that file to update your name, bio, projects, experience, skills, and links —
you never need to touch the components. Fields marked `TODO:` are placeholders
to replace with your own info.

- **Favicon:** edit `public/favicon.svg` (currently a "D" monogram).

## Develop

```sh
npm install      # first time only
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deploy to GitHub Pages

1. In `astro.config.mjs`, confirm `site` and `base` match your GitHub username /
   repo name:
   - Project site (`https://<user>.github.io/<repo>`): `base: '/<repo>'`.
   - User site (repo named `<user>.github.io`): `base: '/'`.
2. Push to the `main` branch.
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source →
   "GitHub Actions"**.
4. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   builds and deploys automatically on every push to `main`.
