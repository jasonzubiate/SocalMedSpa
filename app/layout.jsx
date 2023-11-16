import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LenisContext from "@/context/LenisContext";

export const metadata = {
  title: "So Cal Beauty Med Spa",
  description: "Beauty Med Spa Located In Covina, California",
  keywords:
    "Beauty med spa, Med spa services, Beauty treatments, Skincare, Facial rejuvenation, Anti-aging treatments, Botox, Dermal fillers, Laser hair removal, Microneedling, Chemical peels, Body contouring, Cellulite reduction, CoolSculpting, IPL treatments, Acne treatment, Skin tightening, Semiglutide, Wellness spa, Relaxation therapies",
};

export default function RootLayout({ children }) {
  return (
    <LenisContext>
      <html lang="en">
        <body className="main">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </LenisContext>
  );
}
