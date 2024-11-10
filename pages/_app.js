import MyNavbar from "../components/my-navbar";
import "../styles/global.css";
import MyFooter from "../components/my-footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <MyNavbar />
      <Component {...pageProps} />
      <MyFooter />
    </div>
  );
}
