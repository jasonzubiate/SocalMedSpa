"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/public/assets/img/menu.png";
import styles from "@/app/styles/Navbar.module.css";
import close from "@/public/assets/icons/close.png";
import logo from "@/public/assets/img/logo.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar({ toggle, setMenuToggle, scrollToRef }) {
  const navRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power2", duration: 1.5, delay: 0.3 },
    });

    const viewportWidth = window.innerWidth;
    const desiredHeight = viewportWidth >= 768 ? 100 : 64;

    tl.to(navRef.current, {
      height: desiredHeight,
    });
  }, []);

  return (
    <nav className={styles.nav} ref={navRef}>
      <>
        <Link className={styles.logo_container} href={"/"}>
          <Image className={styles.logo} src={logo} />
        </Link>
        <Link className={styles.navlink_a} href={"/"}>
          So Cal Beauty Med Spa
        </Link>
      </>
      <div className={styles.navlinks}>
        <Link className={styles.navlink_b} href={"/"}>
          Home
        </Link>
        {/* <Link className={styles.navlink_b} href={"/services"}>
					Services
				</Link> */}
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
