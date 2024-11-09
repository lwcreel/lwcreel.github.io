import { getSortedPostsData } from "../../lib/posts";
import RenderBlog from "./render-blog";

export default async function Blog() {
  const data = await getSortedPostsData();
  return <RenderBlog allPostsData={data} />;
}
