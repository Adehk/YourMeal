import LogoIcon from "../../../assets/icons/footer-logo.svg";

import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoIcon} alt="YourMeal logo" />
    </div>
  );
};
export default Logo;