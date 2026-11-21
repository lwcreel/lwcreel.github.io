import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const POSTS_PER_PAGE = 4;

/** A post's frontmatter plus its id (the filename without ".md"). */
export type PostMeta = {
  id: string;
  title: string;
  /** "YYYY-MM-DD" */
  date: string;
  /** Plain-text summary for link previews and RSS. */
  description: string;
};

/** A post with its Markdown body rendered to HTML. */
export type Post = PostMeta & {
  contentHtml: string;
};

/** All posts, newest first, with what the blog index needs to paginate. */
export type PostList = {
  posts: PostMeta[];
  pageCount: number;
  postsPerPage: number;
};

// Only Markdown files are posts; ignore anything else (.DS_Store, drafts in other formats, etc.)
function getPostFileNames() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

// Parse a post file and check its frontmatter, so a bad post fails the build
// with a message naming the file instead of an obscure error further down.
function readPost(id: string): { meta: PostMeta; content: string } {
  const fileName = `${id}.md`;
  const matterResult = matter(
    fs.readFileSync(path.join(postsDirectory, fileName), "utf8"),
  );
  const { title, date, description } = matterResult.data;

  if (typeof title !== "string" || title.trim() === "") {
    throw new Error(`posts/${fileName}: frontmatter is missing a "title"`);
  }
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(
      `posts/${fileName}: frontmatter "date" must be a quoted "YYYY-MM-DD" string`,
    );
  }
  if (description !== undefined && typeof description !== "string") {
    throw new Error(`posts/${fileName}: frontmatter "description" must be a string`);
  }

  return {
    meta: {
      id,
      title,
      date,
      description: description ?? getExcerpt(matterResult.content),
    },
    content: matterResult.content,
  };
}

// The post's first paragraph as plain text, cut to about 160 characters.
function getExcerpt(markdown: string): string {
  const firstParagraph =
    markdown
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find((block) => block && !/^(#|!\[|>|[-*+] |\d+\. |```)/.test(block)) ??
    "";
  const text = firstParagraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/[*_`~]/g, "") // emphasis and code markers
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 160) return text;
  return text.slice(0, 160).replace(/\s+\S*$/, "") + "…";
}

export function getAllPostIds(): string[] {
  // Remove ".md" from file name to get id
  return getPostFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getSortedPostsData(): PostList {
  const posts = getAllPostIds()
    .map((id) => readPost(id).meta)
    // Newest first; "YYYY-MM-DD" strings sort correctly as text
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    posts,
    pageCount: Math.ceil(posts.length / POSTS_PER_PAGE),
    postsPerPage: POSTS_PER_PAGE,
  };
}

export async function getPostData(id: string): Promise<Post> {
  const { meta, content } = readPost(id);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);

  return {
    ...meta,
    contentHtml: processedContent.toString(),
  };
}
