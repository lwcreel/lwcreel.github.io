import MyNavbar from "../components/my-navbar";
import "../../styles/global.css";
import MyFooter from "../components/my-footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  description: "Landon Creel's Personal Website and Blog",
  verification: {
    google: "tvEO8nJc8ocIQRCwCYAVA8ssnvwJtNsJojEsQlHlYJ4",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossOrigin="anonymous"
          />
          <MyNavbar />
          {children}
          <MyFooter />
        </div>
      </body>
      <GoogleAnalytics gaId="G-6GK49PEZD7" />
      <GoogleTagManager gtmId="G-6GK49PEZD7" />
    </html>
  );
}
