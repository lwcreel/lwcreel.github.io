import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from '../../components/date';
import Head from "next/head";
import { useState } from "react";
import { Button } from "react-bootstrap";


export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
}


// TODO: Paginate blog posts once you've got enough
// Also, maybe find a more maintanable method of making them? idk


export default function Blog({ allPostsData }) {
   
    let [page, setPage] = useState(1);

    let posts = allPostsData[0].slice((page - 1) * allPostsData[2], page * allPostsData[2]);

    const handleNext = () => {
        page + 1  > allPostsData[1] ? setPage(page) : setPage(page++);
        console.log("page "  + page);
    }
    const handlePrev = () => {
        page - 1 > 0 ? setPage(page--) : setPage(page);
        console.log("page " + page);
    }

    return (
        <Layout>
            <Head>
                <title>Landon Creel | Blog</title>
            </Head>
            
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {posts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <Button variant="dark" onClick={handlePrev} hidden={page == 1}>prev</Button>
            <Button variant="dark" onClick={handleNext} hidden={page == allPostsData[1]}>next</Button>
        </Layout>
    )
}

