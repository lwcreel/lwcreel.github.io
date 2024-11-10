import { getSortedPostsData } from "../../lib/posts";
import RenderBlog from "./render-blog";

export default async function Blog() {
  const posts = getSortedPostsData();

  return <RenderBlog allPostsData={posts} />;
}
