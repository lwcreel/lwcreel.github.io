import { Suspense } from "react";
import { getSortedPostsData } from "../../lib/posts";
import RenderBlog, { PaginatedBlog } from "./render-blog";

export const metadata = {
  title: "Landon Creel | Blog",
};

export default async function Blog() {
  const posts = getSortedPostsData();

  // The static HTML contains page 1 (the fallback); once loaded in the
  // browser, PaginatedBlog switches to the page named in ?page=.
  return (
    <Suspense fallback={<RenderBlog allPostsData={posts} page={1} />}>
      <PaginatedBlog allPostsData={posts} />
    </Suspense>
  );
}
