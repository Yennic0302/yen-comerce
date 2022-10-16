import { useSelector, useDispatch } from "react-redux";
import ProductCardCart from "../../components/ProductCardCart/ProductCardCart.jsx";
import { CLEAR_CART } from "../../reducers/productsCartReducer/productsCartReducer";

const ProductsCartPage = () => {
  const state = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default ProductsCartPage;
