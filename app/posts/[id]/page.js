import { getAllPostIds, getPostData } from "../../../lib/posts";
import RenderPage from "./render-page";

export async function generateStaticParams() {
  const paths = await getAllPostIds();

  return paths.map((path) => ({
    id: path.id,
  }));
}

export default async function Page({ params }) {
  const { id } = await params;
  let currPost = await getPostData(id);

  return <RenderPage postData={currPost} />;
}
