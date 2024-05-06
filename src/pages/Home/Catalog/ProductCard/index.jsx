import styles from "./index.module.sass";

const ProductCard = ({product}) => {
  return <div className={styles.product}>
    <img className={styles.product__img} src={product.img} alt="Product"/>
    <p className={styles.product__price}>{product.price}&#8381;</p>
    <p className={styles.product__name}>{product.name}</p>
    <p className={styles.product__weight}>{product.weight}г</p>
    <button className={styles.product__add_to_cart_btn}>Добавить</button>
  </div>
};

export default ProductCard;