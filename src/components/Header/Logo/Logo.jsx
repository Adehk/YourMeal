import LogoIcon from "../../../assets/icons/header-logo.svg";

import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoIcon} alt="YourMeal logo" />
    </div>
  );
};
export default Logo;
