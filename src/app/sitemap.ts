import type { MetadataRoute } from "next";
import { getSortedPostsData } from "../lib/posts";
import { SITE_URL } from "../lib/site";

// Required for `output: "export"`: generate the file once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { posts } = getSortedPostsData();

  const pages = ["", "/resume", "/training-log", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
  const postPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.date,
  }));

  return [...pages, ...postPages];
}
