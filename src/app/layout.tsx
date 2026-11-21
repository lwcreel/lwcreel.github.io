import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../components/my-navbar";
import "../../styles/global.css";
import MyFooter from "../components/my-footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Landon Creel | Personal Website",
    // Pages set just their own name, e.g. title: "Blog"
    template: "Landon Creel | %s",
  },
  description: "Landon Creel's Personal Website and Blog",
  openGraph: {
    siteName: "Landon Creel",
    type: "website",
  },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  verification: {
    google: "tvEO8nJc8ocIQRCwCYAVA8ssnvwJtNsJojEsQlHlYJ4",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div>
          <MyNavbar />
          {children}
          <MyFooter />
        </div>
      </body>
      <GoogleAnalytics gaId="G-6GK49PEZD7" />
    </html>
  );
}
