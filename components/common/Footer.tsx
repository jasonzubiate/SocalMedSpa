import styles from "@/styles/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className={styles.p}>
				© 2023 Socal Beauty Med Spa | All Rights Reserved. | Privacy Policy
			</p>
			<p className={styles.p}>
				Site Developed And Maintained By:{" "}
				<a className={styles.a} href="https://www.jasonzubiate.com/">
					<span className={styles.no_wrap}>JASON ZUBIATE</span>
				</a>
			</p>
		</div>
	);
}
