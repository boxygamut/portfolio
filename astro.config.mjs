// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────────────────────
// GitHub Pages configuration
//
//  • `site`  : the full URL your site will be served from.
//  • `base`  : the sub-path. For a project repo (https://<user>.github.io/<repo>)
//              this must be '/<repo>'. If you rename the repo to
//              `<user>.github.io` (a "user site"), set base to '/' and
//              site to 'https://<user>.github.io'.
//
//  TODO: confirm these two values match your GitHub username / repo name.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://boxygamut.github.io',
  base: '/portfolio',
});
