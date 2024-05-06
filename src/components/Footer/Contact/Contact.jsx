import Call from "../../../assets/icons/call.svg";

import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>Номер для заказа</h2>
      <a className={styles.contact__number} href="tel:+79308333811">
        <img src={Call} alt="A phone icon"/>
        +7&#40;930&#41;833-38-11
      </a>
    </div>
  );
};

export default Contact;
