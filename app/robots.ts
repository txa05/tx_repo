import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://your-domain.example/sitemap.xml",
  };
}
