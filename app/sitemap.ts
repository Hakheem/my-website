import { MetadataRoute } from 'next'

const BASE_URL = 'https://hakheem.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = [
    'skillbridge',
    'sixpoint', 
    'east-side-urban',
    'east-ride'
  ]

  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...routes, ...projectUrls]
}

