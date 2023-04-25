import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/Logo.jpg";
import Menu from "@/public/assets/img/menu.png";
import styles from "@/styles/Navbar.module.css";
import close from "@/public/assets/icons/close.png";

export default function Navbar({ toggle, setMenuToggle }) {
	return (
		<nav className={styles.nav}>
			<div>
				<Link href={"/"}>
					<Image className={styles.logo} src={Logo} alt="Home" />
				</Link>
			</div>
			<div className={styles.navlinks}>
				<Link className={styles.navlink} href={"/"}>
					Home
				</Link>
				<Link className={styles.navlink} href={"/services"}>
					Services
				</Link>
			</div>
			<button
				className={styles.btn}
				onClick={() => {
					setMenuToggle(!toggle);
				}}
			>
				{!toggle && (
					<Image
						className={styles.menu}
						src={Menu}
						alt={"Menu"}
						width={24}
						height={24}
						quality={100}
					/>
				)}
				{toggle && (
					<Image
						className={styles.menu}
						src={close}
						alt={"Menu"}
						width={20}
						height={20}
						quality={100}
					/>
				)}
			</button>
		</nav>
	);
}
