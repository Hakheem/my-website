export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
      crawlDelay: 1,
    },
    sitemap: "https://hector-john.online/sitemap.xml",
  };
}

