import Image from "next/image";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import type { ReactNode } from "react";

const name = "Landon Creel";

type LayoutProps = {
  children: ReactNode;
  /** Home page: large photo and name as the page <h1> */
  home?: boolean;
  /** Blog post: adds a "Back to blog" link */
  blog?: boolean;
};

export default function Layout({ children, home, blog }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Home"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {blog && (
        <div className={styles.backToHome}>
          <Link href="/blog">← Back to blog</Link>
        </div>
      )}
    </div>
  );
}
