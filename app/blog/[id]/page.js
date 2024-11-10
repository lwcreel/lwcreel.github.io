import { getAllPostIds } from "../../../lib/posts";
import RenderPage from "./render-page";

export async function generateStaticParams() {
  const posts = await getAllPostIds().then((res) => res);

  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export default async function Page({ params }) {
  const { id } = await params;
  return <RenderPage params={id} />;
}
