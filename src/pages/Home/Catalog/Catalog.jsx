import ProductCard from "./ProductCard";

import styles from "./Catalog.module.sass";

const Catalog = ({products}) => {
  return <div className={styles.catalog}>
   <h2 className={styles.catalog__title}>Бургеры</h2>
   <div className={styles.catalog__product_cards}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
   </div>
  </div>
};

export default Catalog;