// 📁 app/sitemap.ts
import { MetadataRoute } from "next";
import { services } from "@/data/service"; // তোমার ফাইল অনুযায়ী ঠিক করো

// ✅ Static export sitemap declaration
export const dynamic = "force-static"; // 🔥 Force static generation
export const revalidate = false;       // ✅ No revalidation needed

export default function sitemap(): MetadataRoute.Sitemap {
  // const baseUrl = "http://localhost:3001/"; // তোমার domain বসাও
  const baseUrl = "https://www.magpieo.com";  

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/services",
    // "/portfolio",
    // "/blog",
    // "/privacy-policy",
    // "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

const dynamicServices: MetadataRoute.Sitemap = services.map((service) => ({
  url: `${baseUrl}/services/${service.slug}`, // ✅ now uses slug
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
}));


  return [...staticRoutes, ...dynamicServices];
}
