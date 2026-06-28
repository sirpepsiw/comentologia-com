import { posts } from "@/lib/posts";
import type { MetadataRoute } from "next";

const SITE_URL = "https://comentologia.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/dmca`,
      lastModified: new Date("2026-05-26"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...postEntries,
  ];
}
