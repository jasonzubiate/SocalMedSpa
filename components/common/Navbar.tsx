import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/Logo.jpg";
import Menu from "@/public/assets/img/menu.png";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image className={styles.logo} src={Logo} alt="Home" />
      </Link>
      <button className={styles.btn}>
        <Image className={styles.icon} src={Menu} alt="Menu" />
      </button>
    </nav>
  );
}
