import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function TrainingLog() {

    return (
        <Layout>
            <p className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                My training log, maintained on Blogger, can be found here: <Link href="https://mxaofnature.blogspot.com/">Training Log</Link>.
            </p>

            <p>
                It contains records of my training going back to March 2020. Some of my personal bests in that time (listed in pounds) include:
            </p>
            <ul>
                <li>405x1 squat</li>
                <li>265x3 bench</li>
                <li>465x1 deadlift</li>
                <li>165x5 press</li>
            </ul>
        </Layout>
    )
}