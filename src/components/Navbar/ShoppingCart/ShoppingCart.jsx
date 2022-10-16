import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ closeNav }) => {
  const navigate = useNavigate();
  const { totalPrice } = useSelector((state) => state.shoppingCart);
  const { mcApp } = useSelector((state) => state.themeColor);

  return (
    <div className="shopping-cart">
      <div
        className={`cart ${mcApp}`}
        onClick={() => {
          closeNav();
          navigate("/products-cart");
        }}
      >
        <BsFillCartFill />
        <h3>${totalPrice},00</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
