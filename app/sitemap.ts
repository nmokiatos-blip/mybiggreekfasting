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
  "/fastos-prompt-template.txt",
  "/fastos-prompt-sample.txt",
  "/nicks-journey",
  "/ai-prompt-builder",
  "/faq",
  "/blog",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === "" ? `${site.url}/` : `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/fastos-") ? "weekly" : "monthly",
    priority: route.startsWith("/fastos-") ? 1 : route === "" ? 0.9 : 0.7
  }));
}
