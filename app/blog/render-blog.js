"use client";

import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../../components/date";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function RenderBlog({ allPostsData }) {
  let [page, setPage] = useState(1);

  let posts = allPostsData[0].slice(
    (page - 1) * allPostsData[2],
    page * allPostsData[2],
  );

  useEffect(() => {
    posts = allPostsData[0].slice(
      (page - 1) * allPostsData[2],
      page * allPostsData[2],
    );
  }, [page]);

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Button
          variant="dark"
          onClick={() => setPage(page - 1)}
          hidden={page == 1}
        >
          prev
        </Button>
        <Button
          variant="dark"
          onClick={() => setPage(page + 1)}
          hidden={page == allPostsData[1]}
          style={{ margin: "5px" }}
        >
          next
        </Button>
      </section>
    </Layout>
  );
}
