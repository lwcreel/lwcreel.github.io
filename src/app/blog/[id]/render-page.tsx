import Layout from "../../../components/layout";
import FormattedDate from "../../../components/formatted-date";
import utilStyles from "../../../../styles/utils.module.css";
import { getPostData } from "../../../lib/posts";

type RenderPageProps = {
  /** Post id: the filename in posts/ without ".md" */
  id: string;
};

export default async function RenderPage({ id }: RenderPageProps) {
  const post = await getPostData(id);

  return (
    <Layout blog>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <FormattedDate dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
