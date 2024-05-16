import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.p}>© {currentYear} So Cal Beauty Med Spa</p>
    </div>
  );
}
