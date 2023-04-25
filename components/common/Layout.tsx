import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HamburgerMenu from "./HamburgerMenu"
import { useState } from "react";

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<div>
			<Navbar toggle={menuToggle} setMenuToggle={setMenuToggle} />
      {menuToggle && <HamburgerMenu setToggle={setMenuToggle}/>}
			{children}
			<Footer />
		</div>
	);
}
