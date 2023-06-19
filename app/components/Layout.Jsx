import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HamburgerMenu from "./HamburgerMenu"
import { useState } from "react";

export default function Layout({ children, scrollToRef }) {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<div>
			<Navbar toggle={menuToggle} setMenuToggle={setMenuToggle} scrollToRef={scrollToRef}/>
      {menuToggle && <HamburgerMenu setToggle={setMenuToggle}/>}
			{children}
			<Footer />
		</div>
	);
}
