import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCardMain from "../ProductCardMain/ProductCardMain.jsx";
import "./ProductsMainHome.css";

const ProductsMainHome = () => {
  const { bgs, mct } = useSelector((state) => state.themeColor);
  const productsDB = useSelector((state) => state.productsDB);

  return (
    <section className={`products-main  ${mct}`}>
      <div className="container-cards-products container">
        {productsDB &&
          productsDB
            .slice(0, 3)
            .map((product) => (
              <ProductCardMain key={product.id} data={product} />
            ))}
      </div>
    </section>
  );
};

export default ProductsMainHome;
