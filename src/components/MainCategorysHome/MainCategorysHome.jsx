import "./MainCategorysHome.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MainCategorysHome = () => {
  const { bgs, mct } = useSelector((state) => state.themeColor);
  const navigate = useNavigate();

  return (
    <section className={`Main-categorys-container container ${mct}`}>
      <div
        onClick={() => navigate("/products-category/phones")}
        className={`category  box-shadow-1  ${bgs}`}
      >
        <div className="category-img-main">
          <img
            src={require("../../assets/categorys-imgs/phones-banner.jpg")}
            alt=""
          />
        </div>
        <div className="category-info">
          <h3 className="category-title">Phones</h3>
          <div className="imgs-category">
            <img
              src={require("../../assets/products-imgs/note-11.png")}
              alt=""
            />
            <img
              src={require("../../assets/products-imgs/iphone-11-64gb.jpg")}
              alt=""
            />
            <img
              src={require("../../assets/products-imgs/samsung-galaxy-s10.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate("/products-category/consoles")}
        className={`category box-shadow-1 ${bgs}`}
      >
        <div className="category-img-main">
          <img
            src={require("../../assets/categorys-imgs/banner-consoles.jpg")}
            alt=""
          />
        </div>
        <div className="category-info">
          <h3 className="category-title">Consoles</h3>
          <div className={`imgs-category `}>
            <img src={require("../../assets/products-imgs/ps5.webp")} alt="" />
            <img
              src={require("../../assets/products-imgs/xbox-series.png")}
              alt=""
            />
            <img
              src={require("../../assets/products-imgs/nintendo-switch.webp")}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate("/products-category/laptops")}
        className={`category box-shadow-1  ${bgs}`}
      >
        <div className="category-img-main">
          <img
            src={require("../../assets/categorys-imgs/banner-laptops.png")}
            alt=""
          />
        </div>
        <div className="category-info">
          <h3 className="category-title">Laptops</h3>
          <div className="imgs-category">
            <img
              src={require("../../assets/products-imgs/hp-250-g9.png")}
              alt=""
            />
            <img
              src={require("../../assets/products-imgs/msi-pulse-gi66.jpg")}
              alt=""
            />
            <img
              src={require("../../assets/products-imgs/razer-blade-15.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategorysHome;
