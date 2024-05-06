import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Img1 from "./assets/images/product-img-1.png";
import Img2 from "./assets/images/product-img-2.png";
import Img3 from "./assets/images/product-img-3.png";
import Img4 from "./assets/images/product-img-4.png";
import Img5 from "./assets/images/product-img-5.png";
import Img6 from "./assets/images/product-img-6.png";

function App() {
  const products = [
    {
      id: 0,
      img: Img1,
      price: 689,
      name: "Мясная бомба",
      desc: "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
      ingredients: [
        "Пшеничная булочка",
        "Котлета из говядины",
        "Красный лук",
        "Листья салата",
        "Соус сорчичный",
      ],
      weight: 520,
      kcal: 430,
    },
    { id: 1, img: Img2, price: 550, name: "Супер сырный", weight: 512 },
    { id: 2, img: Img3, price: 639, name: "Сытный", weight: 580 },
    { id: 3, img: Img4, price: 480, name: "Тяжелый удар", weight: 470 },
    { id: 4, img: Img5, price: 450, name: "Вечная классика", weight: 450 },
    { id: 5, img: Img6, price: 560, name: "Итальянский", weight: 510 },
  ];
  return (
    <div>
      <Header />
      <Home products={products} />
      <Footer />
    </div>
  );
}

export default App;
