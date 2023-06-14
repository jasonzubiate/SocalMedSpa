import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const formRef = useRef(null);
  const scrollToRef = () => formRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="main">
      <Layout scrollToRef={scrollToRef}>
        <Component formRef={formRef} scrollToRef={scrollToRef} {...pageProps} />
      </Layout>
    </div>
  );
}
