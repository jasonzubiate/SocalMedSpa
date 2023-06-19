"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import { useState, useRef } from "react";

// export const metadata = {
//   title: "So Cal Beauty Med Spa",
//   description: "Beauty Med Spa Located In Covina, California",
//   keywords:
//     "Beauty med spa, Med spa services, Beauty treatments, Skincare, Facial rejuvenation, Anti-aging treatments, Botox, Dermal fillers, Laser hair removal, Microneedling, Chemical peels, Body contouring, Cellulite reduction, CoolSculpting, IPL treatments, Acne treatment, Skin tightening, Semiglutide, Wellness spa, Relaxation therapies",
// };

export default function RootLayout({ children }) {
  const formRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const scrollToRef = () =>
    formRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <html lang="en">
      <body className="main">
        <Navbar
          toggle={menuToggle}
          setMenuToggle={setMenuToggle}
          scrollToRef={scrollToRef}
        />
        {menuToggle && <HamburgerMenu setToggle={setMenuToggle} />}

        {children}
        <Footer />
      </body>
    </html>
  );
}
