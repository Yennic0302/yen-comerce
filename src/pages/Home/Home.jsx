import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselHome from "../../components/CarouselHome/CarouselHome.jsx";
import ProductsMainHome from "../../components/ProductsMainHome/ProductsMainHome.jsx";
import data from "../../data/productData.json";
import { GET_DATA } from "../../reducers/productsDataReducer/productsDataReducer";
import styled from "styled-components";
import MainCategorysHome from "../../components/MainCategorysHome/MainCategorysHome.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const productsDB = useSelector((state) => state.productsDB);
  const [loading, setLoading] = useState(false);
  const { bgm } = useSelector((state) => state.themeColor);

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

  const BannerPublic = styled.div`
    width: 95%;
    height: 17rem;
    display: flex;
    margin: auto;
    margin-top: 4rem;
    background: url(${require("../../assets/banner-img.jpg")}) no-repeat center
      center/cover;
    @media screen and (min-width: 1024px) {
      background-attachment: fixed;
    }
  `;

  return (
    <section className={`home ${bgm} `}>
      <CarouselHome />
      <ProductsMainHome />
      <BannerPublic className="bannerPublic container" />
      <MainCategorysHome />
      <ProductsMainHome />
      <Footer />
    </section>
  );
};

export default Home;
