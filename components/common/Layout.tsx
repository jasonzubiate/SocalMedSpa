import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
