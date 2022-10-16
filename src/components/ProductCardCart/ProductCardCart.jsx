import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  REMOVE_ALL_TO_CART,
  REMOVE_ONE_TO_CART,
} from "../../reducers/productsCartReducer/productsCartReducer";

const ProductCardCart = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        {data.price} x {data.items} = {data.price * data.items}
      </p>
      {data.items > 1 && (
        <button onClick={() => dispatch(REMOVE_ONE_TO_CART(data.id))}>
          Remove one to cart
        </button>
      )}
      <button onClick={() => dispatch(REMOVE_ALL_TO_CART(data.id))}>
        Remove to cart
      </button>
      <button
        onClick={() => {
          navigate(`../product-details/${data.id}`);
        }}
      >
        Show Details
      </button>
    </div>
  );
};

export default ProductCardCart;
