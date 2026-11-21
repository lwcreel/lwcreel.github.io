import { getSortedPostsData } from "../../lib/posts";
import { SITE_URL } from "../../lib/site";

// Required for `output: "export"`: written to out/feed.xml at build time.
export const dynamic = "force-static";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const { posts } = getSortedPostsData();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.id}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Landon Creel | Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Landon Creel's Personal Website and Blog</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
