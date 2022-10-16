import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../reducers/productsCartReducer/productsCartReducer";
import "./ProductCardMain.css";

const ProductCardMain = ({ data }) => {
  const navigate = useNavigate();
  const { bgs } = useSelector((state) => state.themeColor);

  return (
    <div
      className={`product-card  ${bgs} `}
      onClick={() => {
        navigate(`./product-details/${data.id}`);
      }}
    >
      <div className="image-container">
        <img src={require(`../../assets/products-imgs/${data.image}`)} alt="" />
      </div>
      <h3 style={{ padding: "0.5rem" }}>{data.name}</h3>
      <br />
      <h5 style={{ padding: "0.5rem" }}>${data.price},00</h5>
    </div>
  );
};

export default ProductCardMain;
