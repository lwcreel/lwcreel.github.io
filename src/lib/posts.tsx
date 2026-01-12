import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const POSTS_PER_PAGE = 4;

export function getSortedPostsData() {
  const allPostsData = fs.readdirSync(postsDirectory).map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(
      fs.readFileSync(path.join(postsDirectory, fileName), "utf8"),
    );

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return [
    allPostsData.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    }),
    Math.ceil(allPostsData.length / POSTS_PER_PAGE),
    POSTS_PER_PAGE,
  ];
}

export async function getAllPostIds() {
  const fileNames = await fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const retval: any = {
    id,
    contentHtml,
    ...matterResult.data,
  };

  // Combine the data with the id and contentHtml
  return retval;
}
