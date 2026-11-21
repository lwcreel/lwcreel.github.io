import type { Metadata } from "next";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import RenderPage from "./render-page";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams(): { id: string }[] {
  return getAllPostIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostData(id);

  return {
    title: post.title,
    description: post.description,
    // Nested objects here replace (not merge with) the root layout's,
    // so repeat the RSS link and site name.
    alternates: {
      canonical: `/blog/${id}`,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      siteName: "Landon Creel",
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${id}`,
      publishedTime: post.date,
    },
  };
}

export default async function Page({ params }: PostPageProps) {
  const { id } = await params;
  return <RenderPage id={id} />;
}
