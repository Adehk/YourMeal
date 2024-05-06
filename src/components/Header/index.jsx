import Logo from "./Logo/Logo";
import Hero from "../../components/Header/Hero/Hero";

import styles from "./index.module.sass";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Logo/>  
      </div>
      <Hero/>
    </header>
  );
};

export default Header;
