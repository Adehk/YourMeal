import Telegram from "../../../assets/icons/Telegram";
import Vk from "../../../assets/icons/Vk";

import styles from "./Socials.module.sass";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <h2 className={styles.socials__title}>Мы&nbsp;в&nbsp;соцсетях</h2>
      <div className={styles.socials__links}>
        <a className={styles.socials__link} href="/">
          <Vk/>
        </a>
        <a className={styles.socials__link} href="/">
          <Telegram/>
        </a>
      </div>
    </div>
  );
};

export default Socials;
