import Burger from "../../../assets/images/burger.svg"

import styles from "./Hero.module.sass";

const Hero = () => {
  return <section className={styles.hero}>
    <div className={styles.hero__content}>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__title}>Только самые <br /> <span>сочные бургеры!</span></h1>
        <p className={styles.hero__paragraph}>Бесплатная доставка от&nbsp;599&#8381;</p>
      </div>
      <div className={styles.hero__img}>
        <img src={Burger} alt="A burger"/>
      </div>
    </div>
  </section>
};

export default Hero;