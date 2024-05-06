import Cart from "./Cart/Cart";
import Catalog from "./Catalog/Catalog";
import Categories from "./Categories/Categories";

import styles from "./index.module.sass";

const Home = ({products}) => {
  return (
    <div>
      <Categories/>
      <div className={styles.cart_and_catalog_wrapper}>
        <Cart/>
        <Catalog products={products}/>
      </div>
    </div>
  );
};

export default Home;
