import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const POSTS_PER_PAGE = 4;

// Only Markdown files are posts; ignore anything else (.DS_Store, drafts in other formats, etc.)
function getPostFileNames() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

// Parse a post file and check its frontmatter, so a bad post fails the build
// with a message naming the file instead of an obscure error further down.
function readPost(id: string) {
  const fileName = `${id}.md`;
  const matterResult = matter(
    fs.readFileSync(path.join(postsDirectory, fileName), "utf8"),
  );
  const { title, date } = matterResult.data;

  if (typeof title !== "string" || title.trim() === "") {
    throw new Error(`posts/${fileName}: frontmatter is missing a "title"`);
  }
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(
      `posts/${fileName}: frontmatter "date" must be a quoted "YYYY-MM-DD" string`,
    );
  }

  return matterResult;
}

// Short plain-text summary for link previews and the RSS feed: the
// frontmatter "description" if set, otherwise the post's first paragraph.
function getDescription(matterResult: matter.GrayMatterFile<string>) {
  if (typeof matterResult.data.description === "string") {
    return matterResult.data.description;
  }

  const firstParagraph =
    matterResult.content
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

export function getSortedPostsData() {
  const allPostsData = getPostFileNames().map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const matterResult = readPost(id);

    // Combine the frontmatter with the id
    return {
      id,
      ...matterResult.data,
      description: getDescription(matterResult),
    };
  });

  // Sort posts by date, newest first
  return [
    allPostsData.sort((a: any, b: any) => (a.date < b.date ? 1 : -1)),
    Math.ceil(allPostsData.length / POSTS_PER_PAGE),
    POSTS_PER_PAGE,
  ];
}

export async function getAllPostIds() {
  return getPostFileNames().map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const matterResult = readPost(id);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  const retval: any = {
    id,
    contentHtml,
    ...matterResult.data,
    description: getDescription(matterResult),
  };

  return retval;
}
