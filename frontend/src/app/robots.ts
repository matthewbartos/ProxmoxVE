import { basePath } from "@/config/siteConfig";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://matthewbartos.github.io/${basePath}/sitemap.xml`,
  };
}
