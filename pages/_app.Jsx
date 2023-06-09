import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
	const formRef = useRef(null);
	const scrollToRef = () => ref.current.scrollIntoView({ behavior: "smooth" });

	return (
		<div className="main">
			<Layout scrollToRef={scrollToRef}>
				<Component ref={formRef} {...pageProps} />
			</Layout>
		</div>
	);
}
