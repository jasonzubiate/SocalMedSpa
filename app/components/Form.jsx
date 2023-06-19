import emailjs from "@emailjs/browser";
import styles from "@/app/styles/Form.module.css"
export default function Form() {
  const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_9efmxmg",
				"template_tojkqmu",
				e.target,
				"rwOAXyAKAo4ZTTkGO"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setSubmitted(true);
	};

  return (
    <form className={styles.form} action="" onSubmit={sendEmail}>
      <input
        className={styles.input}
        type="text"
        placeholder={"Full Name"}
        name="fullName"
        required
      />
      <input
        className={styles.input}
        type="email"
        placeholder={"Email Address"}
        name="email"
        required
      />
      <input
        className={styles.input}
        type="tel"
        placeholder={"Phone Number"}
        name="phone"
        required
      />
      <input
        className={styles.input}
        type="text"
        placeholder={"Message"}
        name="message"
        required
      />
      <button className={styles.btn}>Submit</button>
    </form>
  );
}
