import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardMain from "../../components/ProductCardMain/ProductCardMain.jsx";
import data from "../../data/productData.json";
import { GET_DATA } from "../../reducers/productsDataReducer/productsDataReducer";
import { useParams } from "react-router-dom";
import "./ProductsSearchPage.css";

const ProductsSearchPage = () => {
  const productsDB = useSelector((state) => state.productsDB);
  const { search = null, category = null } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [productsToShow, setProductsToShow] = useState(null);
  const { mct } = useSelector((state) => state.themeColor);

  useEffect(() => {
    let timeOutLoading;
    if (!productsDB) {
      setLoading(true);
      dispatch(GET_DATA(data));
    }

    timeOutLoading = setTimeout(() => {
      setLoading(false);
      return clearTimeout(timeOutLoading);
    }, 2000);
  }, []);

  useEffect(() => {
    if (productsDB) {
      if (search) {
        let modificSearch = search.split("-").join(" ");
        setProductsToShow(
          productsDB.filter(
            (product) => product.name.indexOf(modificSearch) !== -1
          )
        );
      } else {
        setProductsToShow(
          productsDB.filter(
            (product) => product.category.indexOf(category) !== -1
          )
        );
      }
    }
  }, [productsDB, search, category]);

  return (
    <section className={`${mct}`}>
      <div className="results-products-conatiner container">
        <h2 className="title-results-search">
          {search ? `Results: ${search.split("-").join(" ")}` : category}
        </h2>
        <hr />
        <div className="result-search-products">
          {productsToShow &&
            productsToShow.map((product) => (
              <ProductCardMain
                key={product.id}
                data={product}
              ></ProductCardMain>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSearchPage;
