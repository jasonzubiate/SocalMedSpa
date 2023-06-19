import styles from "@/app/styles/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className={styles.p}>
				© 2023 Socal Beauty Med Spa | Site Developed And Maintained by{" "}
				<a className={styles.a} href="https://www.jasonzubiate.com/">
					<span className={styles.no_wrap}>Jason Zubiate</span>
				</a>
			</p>
		</div>
	);
}
