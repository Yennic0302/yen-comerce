import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { GET_DATA } from "../../reducers/productsDataReducer/productsDataReducer";
import data from "../../data/productData.json";

const ProductDetailsPage = () => {
  const productsDB = useSelector((state) => state.productsDB);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [productToShow, setProductToShow] = useState(null);

  useEffect(() => {
    let timeOutLoading;
    if (!productsDB) {
      setLoading(true);
      dispatch(GET_DATA(data));
    }

    timeOutLoading = setTimeout(() => {
      setLoading(false);
      return clearTimeout(timeOutLoading);
    }, 1000);
  }, []);

  useEffect(() => {
    if (productsDB) {
      setProductToShow(productsDB.find((item) => item.id === id));
    }
  }, [productsDB]);

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default ProductDetailsPage;
