import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.css";

export default function HamburgerMenu({ setToggle }) {
	return (
		<nav className={styles.menu}>
			<Link
				className={styles.link}
				href={"/"}
				onClick={() => {
					setToggle(false);
				}}
			>
				Home
			</Link>
			{/* <Link
				className={styles.link}
				href={"/services"}
				onClick={() => {
					setToggle(false);
				}}
			>
				Services
			</Link> */}
		</nav>
	);
}
