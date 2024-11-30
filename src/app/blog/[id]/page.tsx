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
    title: "Landon Creel | " + postData.title,
  };
}

export default async function Page({ params }: any) {
  const { id } = await params;
  return <RenderPage params={id} />;
}
