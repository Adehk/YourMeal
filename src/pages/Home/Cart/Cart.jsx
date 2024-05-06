import styles from "./Cart.module.sass";

const Cart = () => {
  return <div className={styles.cart}>
    <div className={styles.cart__wrapper}>
      <div className={styles.cart__content}>
        <h2 className={styles.cart__title}>Корзина</h2>
        <p className={styles.cart__quantity}>0</p>
      </div>
    </div>
  </div>
};

export default Cart;