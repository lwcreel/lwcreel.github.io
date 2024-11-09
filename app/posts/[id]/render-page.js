import Layout from "../../../components/layout";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";

export default async function RenderPage({ postData }) {
  return (
    <Layout blog>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
