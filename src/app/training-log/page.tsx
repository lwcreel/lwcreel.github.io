import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../../styles/utils.module.css";

export default function TrainingLog() {
  return (
    <Layout>
      <p className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        My training log, maintained on Blogger, can be found here:{" "}
        <Link href="https://mxaofnature.blogspot.com/">Training Log</Link>.
      </p>

      <p>
        It contains records of my training going back to March 2020. Some of my
        personal bests in that time (listed in pounds) include a{" "}
        <b>405 squat</b>, a <b>465 deadlift</b>, and a <b>265 bench</b> for 3.
        I've also performed a <b>245 clean and jerk</b> and a <b>185 snatch</b>.
        All of these were training lifts, and those versed in the sport of
        weightlifting will have to forgive my usage of imperial units.
      </p>

      <p>
        A final note here is that my online training log is not exhaustive, and
        my training history extends back more than a decade at this point, as
        I've been involved with sports and training for those sports since I was
        very young. My first dedicated physical training for sport began at the
        age of 12.
      </p>
    </Layout>
  );
}
