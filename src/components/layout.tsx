import Image from "next/image";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = "Landon Creel";
export const siteTitle = "Landon Creel | Personal Website";

export default function Layout({ children, home, blog }: any) {
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
                alt=""
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
