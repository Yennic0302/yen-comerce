import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import ProductsCartPage from "./pages//ProductsCartPage/ProductsCartPage.jsx";
import ProductsSearchPage from "./pages//ProductsSearchPage/ProductsSearchPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/products-cart" element={<ProductsCartPage />} />
        <Route
          path="/products-search/:search/"
          element={<ProductsSearchPage />}
        />
        <Route
          path="/products-category/:category/"
          element={<ProductsSearchPage />}
        />
        <Route
          path="/products-search/:search/product-details/:id"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/products-category/:category/product-details/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </>
  );
};

export default App;
