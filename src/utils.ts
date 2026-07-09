/**
 * Prefix a path with the configured `base` (e.g. '/Personal-Website') so that
 * links to files in /public resolve correctly on GitHub Pages project sites.
 * Use for asset/anchor hrefs like the favicon or resume. Anchor links (#about)
 * do not need this.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
