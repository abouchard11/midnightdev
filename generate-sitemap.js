import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://midnightdev.dev';
const OUTPUT_FILE = path.join(__dirname, 'client/public/sitemap.xml');

// Static routes
const staticRoutes = [
  '/',
  '/geo-optimization',
  '/citation-engineering',
  // Add other static routes here if they exist (e.g., /saas-development, /ai-marketing)
  // Note: SaaS and AI Marketing pages were in the plan but verify if they exist in file system
];

// Dynamic routes (Case Studies)
// In a real build, you might import this from your data file, 
// but for this script we'll hardcode the known IDs to avoid TS/JS interop issues in this simple script
const caseStudyIds = [
  'fintech-saas-platform',
  'legal-firm-austin',
  'e-commerce-brand'
];

const generateSitemap = () => {
  const routes = [
    ...staticRoutes,
    ...caseStudyIds.map(id => `/case-study/${id}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_FILE}`);
};

generateSitemap();
