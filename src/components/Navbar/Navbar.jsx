import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsJustify, BsSearch } from "react-icons/bs";
import NavBarSearch from "./NavBarSearch/NavBarSearch.jsx";
import "./Navbar.css";
import SelectTheme from "./SelectTheme/SelectTheme.jsx";
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";
import { useRef } from "react";

const Navbar = () => {
  const { bgm, bgt, mct, mcApp, bgf } = useSelector(
    (state) => state.themeColor
  );

  let navOptionsRef = useRef(),
    btnMenuRef = useRef(),
    navBarRef = useRef(),
    btnOpenSearchRef = useRef();

  const closeNav = () => {
    navOptionsRef.current.style.animation = "vanish-nav 0.7s";
    btnMenuRef.current.style.transform = "rotate(0deg)";
    setTimeout(() => {
      navOptionsRef.current.style.display = "none";
    }, 650);
  };

  const showNav = () => {
    navOptionsRef.current.style.animation = "show-nav 0.4s ease";
    btnMenuRef.current.style.transform = "rotate(90deg)";
    navOptionsRef.current.style.display = "block";
  };

  const closeBarSearch = () => {
    navBarRef.current.style.animation = " vanish-bar-search 1s";
    btnOpenSearchRef.current.style.animation = "none";
    setTimeout(() => {
      navBarRef.current.style.display = "none";
    }, 900);
  };

  const openBarSearch = () => {
    navBarRef.current.style.animation = " show-bar-search 1s";
    navBarRef.current.style.display = "flex";
    btnOpenSearchRef.current.style.animation = "vanish-active-btn 0.4s";
  };
  const handleNavOptions = () => {
    if (navOptionsRef.current.style.display === "block") {
      closeNav();
    } else {
      showNav();
    }
  };

  const handleNavbarSearch = () => {
    if (navBarRef.current.style.display === "flex") closeBarSearch();
    else openBarSearch();
  };

  return (
    <header className={`header ${bgm} box-shadow-1`}>
      <section className="container">
        <div ref={navOptionsRef} onClick={closeNav} className="nav-bg-menu">
          <nav
            onClick={(e) => e.stopPropagation()}
            className={` ${bgm} ${mct} nav-options `}
          >
            <div className="nav-component-menu">
              <h3>Cart</h3>
              <ShoppingCart closeNav={closeNav} />
              <h3>SelectTheme</h3>
              <SelectTheme />
            </div>
            <h3>Categorys</h3>

            <div className="categorys-redirect-menu ">
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/phones"
              >
                Telfonos
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/telefonos-baratos"
              >
                Telefonos baratos
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/consoles"
              >
                Consoles
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/:category"
              >
                Computers
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/:category"
              >
                headsets
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/:category"
              >
                microfones
              </Link>
              <Link
                className={`${mcApp} ${bgf}`}
                onClick={closeNav}
                to="/products-category/:category"
              >
                Camaras
              </Link>
            </div>
          </nav>
        </div>

        <div className="main-nav-components">
          <div className="nav-component-one">
            <button
              ref={btnMenuRef}
              className={`menu-btn ${mcApp} `}
              onClick={handleNavOptions}
            >
              <BsJustify />
            </button>

            <div onClick={closeNav} className="logo">
              <Link className={mcApp} to="/">
                Yen Comerce
              </Link>
            </div>
          </div>

          <div ref={navBarRef} className={`nav-component-two ${bgm}`}>
            <NavBarSearch
              openBarSearch={openBarSearch}
              closeNav={closeNav}
              closeBarSearch={closeBarSearch}
              handleNavbarSearch={handleNavbarSearch}
            />
          </div>

          <button
            ref={btnOpenSearchRef}
            onClick={() => {
              handleNavbarSearch();
              closeNav();
            }}
            className={`btn-open-bar-search ${mcApp} ${bgt}`}
          >
            {<BsSearch />}
          </button>

          <div className=" nav-component-thre">
            <SelectTheme />
            <ShoppingCart closeNav={closeNav} />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Navbar;
