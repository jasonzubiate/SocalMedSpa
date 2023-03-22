import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.jpg";
import Menu from "@/public/assets/images/menu.png"

export default function Navbar() {
	return (
		<nav>
			<Link href={"/"}>
				<Image src={Logo} alt="Home" />
			</Link>
		</nav>
	);
}
