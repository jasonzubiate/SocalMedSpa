import Image from "next/image";
import Link from "next/link";
import Menu from "@/public/assets/img/menu.png";
import styles from "@/styles/Navbar.module.css";
import close from "@/public/assets/icons/close.png";
import logo from "@/public/assets/img/logo.jpg";

export default function Navbar({ toggle, setMenuToggle, scrollToRef }) {
  return (
    <nav className={styles.nav}>
      <>
        <Link className={styles.navlink_a} href={"/"}>
          So Cal Beauty Med Spa
        </Link>
      </>
      <div className={styles.navlinks}>
        <Link className={styles.navlink_b} href={"/"}>
          Home
        </Link>
        <Link className={styles.navlink_b} href={"/services"}>
          Services
        </Link>
        <button className={styles.nav_cta} onClick={scrollToRef}>
          Book Now
        </button>
      </div>
      <button
        className={styles.menu}
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
