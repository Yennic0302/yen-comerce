import { useEffect, useRef, useState } from "react";
import { BsFillArrowUpSquareFill, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBarSearch = ({
  closeBarSearch,
  handleNavbarSearch,
  closeNav,
  openBarSearch,
}) => {
  const { mcApp, mct, bgm } = useSelector((state) => state.themeColor);
  const productsDB = useSelector((state) => state.productsDB);
  const [resultsToShow, setResultsToShow] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const resultSearchRef = useRef();
  const [mq1024, setMq1024] = useState(null);

  const mq = window.matchMedia("(min-width: 1024px)");

  mq.addEventListener("change", () => {
    if (mq.matches === true) {
      setMq1024(true);
      openBarSearch();
    } else {
      setMq1024(false);
    }
  });

  const showResults = () => {
    resultSearchRef.current.style.display = "flex";
  };

  const vanishResults = () => {
    resultSearchRef.current.style.display = "none";
  };

  const handleResultsToShow = (e) => {
    let newResults = productsDB.filter(
      (product) => product.name.indexOf(e.target.value) !== -1
    );
    let names = newResults.map((product) => [
      product.name.split(" ").join("-"),
      product.name,
    ]);
    setResultsToShow(names);
    setSearch(e.target.value);
    showResults();
  };

  useEffect(() => {
    if (mq.matches) {
      setMq1024(true);
    } else {
      setMq1024(false);
    }
  }, []);

  return (
    <div
      onBlur={() => {
        setTimeout(() => {
          vanishResults();
        }, 100);
      }}
      className="bar-search"
    >
      <div className="input-search-container">
        <button
          className={`btn-close-bar-search ${mcApp}`}
          onClick={() => {
            handleNavbarSearch();
            vanishResults();
          }}
        >
          {<BsFillArrowUpSquareFill />}
        </button>
        <input
          list="results-options"
          onFocus={() => {
            closeNav();
          }}
          autoComplete="off"
          onChange={handleResultsToShow}
          className={`input-search ${mct}`}
          type="text"
          name="products-search"
          placeholder="Search..."
        />
        <button
          onClick={() => {
            vanishResults();
            (() => (mq1024 ? null : closeBarSearch()))();
            navigate(`/products-search/${search}`);
          }}
          className={`btn-search ${mcApp}`}
        >
          <BsSearch />
        </button>
      </div>
      <div ref={resultSearchRef} className={`results-search ${bgm}`}>
        {resultsToShow.length > 0 &&
          resultsToShow.slice(0, 6).map((result, index) => (
            <Link
              onBlur={(e) => {
                e.stopPropagation();
              }}
              onClick={() => {
                vanishResults();
                (() => (mq1024 ? false : closeBarSearch()))();
                setResultsToShow([]);
                setSearch(null);
              }}
              key={index}
              className={`link-search ${mct}`}
              to={`/products-search/${result[0]}`}
            >
              {result[1]}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NavBarSearch;
