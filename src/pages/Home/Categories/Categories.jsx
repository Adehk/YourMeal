import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Burgers from "../../../assets/icons/burgers.svg"
import Snacks from "../../../assets/icons/snacks.svg"
import Hotdogs from "../../../assets/icons/hotdogs.svg"
import Combo from "../../../assets/icons/combo.svg"
import Shawarma from "../../../assets/icons/shawarma.svg"
import Pizza from "../../../assets/icons/pizza.svg"
import Wok from "../../../assets/icons/wok.svg"
import Desserts from "../../../assets/icons/desserts.svg"
import Souses from "../../../assets/icons/souses.svg"

import "swiper/scss";
import styles from "./Categories.module.sass";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
  {id: 0, svg: Burgers, category: "Бургеры"},
  {id: 1, svg: Snacks, category: "Закуски"}, 
  {id: 2, svg: Hotdogs, category: "Хот-доги"},
  {id: 3, svg: Combo, category: "Комбо"},
  {id: 4, svg: Shawarma, category: "Шаурма"},
  {id: 5, svg: Pizza, category: "Пицца"},
  {id: 6, svg: Wok, category: "Вок"},
  {id: 7, svg: Desserts, category: "Десерты"},
  {id: 8, svg: Souses, category: "Соусы"},
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return <div className={styles.categories}>
     <Swiper 
        className={styles.categories__swiper}
        slidesPerView={"auto"}
        spaceBetween={8}
        breakpoints={{
          768: {
            spaceBetween: 12,
          },
          1024: {
            spaceBetween: 24,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>   
            <div className={`${styles.category} ${ activeCategory === category.id ? styles.active : ""}`}
              onClick={() => handleCategoryClick(category.id)}>
              <img src={category.svg} alt={category.category} />
              <p className={styles.category__text}>{category.category}</p>
            </div>
          </SwiperSlide>))}
      </Swiper>
  </div>
};

export default Categories;