import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/start-here",
  "/the-method",
  "/fastos",
  "/fastos-method",
  "/fastos-method-ai",
  "/fastos-method.md",
  "/fastos-method.txt",
  "/nicks-journey",
  "/ai-prompt-builder",
  "/faq",
  "/blog",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/fastos-method") ? "weekly" : "monthly",
    priority: route.startsWith("/fastos-method") ? 1 : route === "" ? 0.9 : 0.7
  }));
}
