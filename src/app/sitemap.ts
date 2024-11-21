import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.namecraft.site';
  const lastModified = new Date().toISOString();
  
  // Define all routes with their priorities and change frequencies
  const routes = [
    {
      url: '',
      changeFreq: 'daily' as const,
      priority: 1.0,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/learn-more',
      changeFreq: 'weekly' as const,
      priority: 0.9,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/learn-more/chinese',
      changeFreq: 'weekly' as const,
      priority: 0.8,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/learn-more/english',
      changeFreq: 'weekly' as const,
      priority: 0.8,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/learn-more/japanese',
      changeFreq: 'weekly' as const,
      priority: 0.8,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/support',
      changeFreq: 'monthly' as const,
      priority: 0.7,
      alternates: ['en', 'zh', 'ja']
    },
    {
      url: '/privacy',
      changeFreq: 'monthly' as const,
      priority: 0.5,
      alternates: []
    },
    {
      url: '/terms',
      changeFreq: 'monthly' as const,
      priority: 0.5,
      alternates: []
    }
  ];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // Add main route
    sitemapEntries.push({
      url: `${baseUrl}${route.url}`,
      lastModified,
      changeFrequency: route.changeFreq,
      priority: route.priority,
    });

    // Add language-specific routes
    route.alternates.forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route.url}`,
        lastModified,
        changeFrequency: route.changeFreq,
        priority: route.priority * 0.9, // Slightly lower priority for language variants
      });
    });
  });

  return sitemapEntries;
}