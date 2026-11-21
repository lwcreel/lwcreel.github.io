import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../components/my-navbar";
import "../../styles/global.css";
import MyFooter from "../components/my-footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
          <MyNavbar />
          {children}
          <MyFooter />
        </div>
      </body>
      <GoogleAnalytics gaId="G-6GK49PEZD7" />
    </html>
  );
}
