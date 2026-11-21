"use client";

import Layout from "../../components/layout";
import utilStyles from "../../../styles/utils.module.css";
import Link from "next/link";
import FormattedDate from "../../components/formatted-date";
import { useSearchParams } from "next/navigation";

// Reads the current page from the URL (/blog?page=2), so refresh and Back work.
// Must render inside a <Suspense> boundary because it uses useSearchParams.
export function PaginatedBlog({ allPostsData }: any) {
  const searchParams = useSearchParams();
  const pageCount = allPostsData[1];
  const requested = parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isNaN(requested)
    ? 1
    : Math.min(Math.max(requested, 1), Math.max(pageCount, 1));

  return <RenderBlog allPostsData={allPostsData} page={page} />;
}

export default function RenderBlog({ allPostsData, page }: any) {
  const [allPosts, pageCount, postsPerPage] = allPostsData;
  const posts = allPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <FormattedDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {page > 1 && (
          <Link
            className="btn btn-dark"
            href={page - 1 === 1 ? "/blog" : `/blog?page=${page - 1}`}
          >
            prev
          </Link>
        )}
        {page < pageCount && (
          <Link
            className="btn btn-dark"
            href={`/blog?page=${page + 1}`}
            style={{ margin: "5px" }}
          >
            next
          </Link>
        )}
      </section>
    </Layout>
  );
}
