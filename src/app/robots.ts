import { MetadataRoute } from "next";

export const dynamic = "force-static"; // optional but safe

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Allow all pages
      },
    ],
    sitemap: "https://magpieo.com/sitemap.xml", // or your local URL
    host: "https://magpieo.com",
  };
}
