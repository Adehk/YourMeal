import Contact from "./Contact/Contact";
import Copyright from "./Copyright/Copyright";
import Logo from "./Logo/Logo";
import Socials from "./Socials/Socials";
import styles from "./index.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
      <div className={styles.footer__info}>
        <Logo/>
        <div className={styles.footer__cta}>
          <Contact/>
          <Socials/>
        </div>
      </div>
        <Copyright/>
      </div>
    </div>
  );
};

export default Footer;
