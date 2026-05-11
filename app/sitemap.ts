import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/frontier", "/principles", "/lab", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...routes, ...posts];
}
