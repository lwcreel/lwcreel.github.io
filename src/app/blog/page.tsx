import { Suspense } from "react";
import type { Metadata } from "next";
import { getSortedPostsData } from "../../lib/posts";
import RenderBlog, { PaginatedBlog } from "./render-blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const postList = getSortedPostsData();

  // The static HTML contains page 1 (the fallback); once loaded in the
  // browser, PaginatedBlog switches to the page named in ?page=.
  return (
    <Suspense fallback={<RenderBlog postList={postList} page={1} />}>
      <PaginatedBlog postList={postList} />
    </Suspense>
  );
}
