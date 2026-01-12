import Layout from "../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Layout home>
      <Container className={utilStyles.headingMd}>
        <p>
          <b>
            <i>mul&bull;ti&bull;po&bull;ten&bull;tial&bull;ite:</i>
          </b>{" "}
          someone with many interests
        </p>

        <p>
          Hello, welcome to my home page! My name is Landon Creel and I am a
          software engineer at Dell Technologies.
        </p>
      </Container>

      <Container>
        <p>
          I have many interests besides that, including but not limited to:
          TTRPGs, board games, lifting weights, running, baking, science,
          technology, and history.
        </p>

        <p>
          I read and enjoy all things Sci-Fi and Fantasy. Here you will find my
          resume, along with links to my training log and social media.
        </p>

        <small>
          <i>I also write things sometimes and there's a blog here.</i>
        </small>
      </Container>
    </Layout>
  );
}
