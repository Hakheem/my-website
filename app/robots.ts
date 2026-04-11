import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
      crawlDelay: 1,
    },
    sitemap: 'https://hakheem.netlify.app/sitemap.xml',
  }
}

