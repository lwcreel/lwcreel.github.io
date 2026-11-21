import { Metadata } from "next";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import RenderPage from "./render-page";

export async function generateStaticParams() {
  const posts = await getAllPostIds().then((res) => res);

  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const id = (await params).id;
  const postData: any = await getPostData(await id);

  return {
    title: postData.title,
    description: postData.description,
    // Nested objects here replace (not merge with) the root layout's,
    // so repeat the RSS link and site name.
    alternates: {
      canonical: `/blog/${id}`,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      siteName: "Landon Creel",
      type: "article",
      title: postData.title,
      description: postData.description,
      url: `/blog/${id}`,
      publishedTime: postData.date,
    },
  };
}

export default async function Page({ params }: any) {
  const { id } = await params;
  return <RenderPage params={id} />;
}
