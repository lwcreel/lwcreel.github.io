import Layout from "../../../components/layout";
import FormattedDate from "../../../components/formatted-date";
import utilStyles from "../../../../styles/utils.module.css";
import { getPostData } from "../../../lib/posts";

export default async function RenderPage({ params }: any) {
  let postData: any = await getPostData(await params);

  return (
    <Layout blog>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <FormattedDate dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
