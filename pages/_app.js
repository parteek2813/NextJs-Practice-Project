import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar>I am a div</Navbar>
      <Component {...pageProps} />
    </>
  );
}
