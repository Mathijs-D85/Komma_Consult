import fs from 'fs'
import path from 'path'

function stripTrailingSlash(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function getBlogRoutesFromSource(tsFileContent) {
  // Remove block comments and line comments so the template doesn't get parsed.
  const withoutBlockComments = tsFileContent.replace(/\/\*[\s\S]*?\*\//g, '')
  const withoutLineComments = withoutBlockComments.replace(/^\s*\/\/.*$/gm, '')

  // Match objects containing slug + date.
  const matches = [...withoutLineComments.matchAll(/\{\s*slug:\s*"([^"]+)"[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g)]

  return matches.map((m) => ({
    slug: m[1],
    date: m[2],
  }))
}

const BASE_URL = stripTrailingSlash(process.env.SITE_URL || 'https://kommaconsult.nl')
const distDir = path.resolve(process.cwd(), 'dist')
ensureDir(distDir)

// Static pages (pas hier aan als je routes verandert)
const staticPaths = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/diensten', changefreq: 'monthly', priority: '0.8' },
  { path: '/over', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/nieuws', changefreq: 'weekly', priority: '0.8' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/game/', changefreq: 'monthly', priority: '0.4' },
]

// Blog posts from source file
const blogSourcePath = path.resolve(process.cwd(), 'src', 'content', 'blogPosts.ts')
const blogSource = fs.readFileSync(blogSourcePath, 'utf8')
const blogRoutes = getBlogRoutesFromSource(blogSource)

const urls = [
  ...staticPaths.map((p) => ({
    loc: `${BASE_URL}${p.path}`,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
  ...blogRoutes.map((b) => ({
    loc: `${BASE_URL}/nieuws/${b.slug}`,
    lastmod: b.date,
    changefreq: 'yearly',
    priority: '0.6',
  })),
]

// Build sitemap XML
const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((u) => {
      const parts = [
        `  <url>`,
        `    <loc>${escapeXml(u.loc)}</loc>`,
        u.lastmod ? `    <lastmod>${escapeXml(u.lastmod)}</lastmod>` : null,
        u.changefreq ? `    <changefreq>${escapeXml(u.changefreq)}</changefreq>` : null,
        u.priority ? `    <priority>${escapeXml(u.priority)}</priority>` : null,
        `  </url>`,
      ].filter(Boolean)
      return parts.join('\n')
    })
    .join('\n') +
  `\n</urlset>\n`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8')

// robots.txt
const robotsTxt =
  `User-agent: *\n` +
  `Allow: /\n\n` +
  `Sitemap: ${BASE_URL}/sitemap.xml\n`

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8')

console.log(`[sitemap] Generated ${urls.length} URLs -> dist/sitemap.xml`)
