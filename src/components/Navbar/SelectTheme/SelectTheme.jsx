import { useRef } from "react";
import { BsFillEaselFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../reducers/themeReducer/themeReducer";
const SelectTheme = () => {
  const dispatch = useDispatch();
  const { bgt, mcTheme } = useSelector((state) => state.themeColor);

  let btnThemeSelectorRef = useRef(),
    themeOptions = useRef();

  const closeThemeOptions = () => {
    themeOptions.current.style.animation = "vanish-options-theme 1s";
    for (let button of themeOptions.current.children) {
      button.style.animation = "vanish-button-theme 1s";
    }
    setTimeout(() => {
      themeOptions.current.style.display = "none";
    }, 650);
  };

  const showThemeOptions = () => {
    themeOptions.current.style.animation = "show-options-theme 1s";
    for (let button of themeOptions.current.children) {
      button.style.animation = "show-button-theme 1s";
    }
    themeOptions.current.style.display = "flex";
  };

  const handleThemeOptions = () => {
    if (themeOptions.current.style.display === "flex") {
      closeThemeOptions();
    } else {
      showThemeOptions();
    }
  };

  return (
    <div className="select-theme">
      <button
        onClick={handleThemeOptions}
        ref={btnThemeSelectorRef}
        className={`btn-select-theme ${mcTheme}`}
      >
        {<BsFillEaselFill />}
      </button>
      <div ref={themeOptions} className={`themes-options ${bgt}`}>
        <button
          onClick={() => {
            dispatch(setTheme("ligth"));
            closeThemeOptions();
          }}
          style={{ backgroundColor: "#fff" }}
          className="btn-theme"
        ></button>
        <button
          onClick={() => {
            dispatch(setTheme("dark"));
            closeThemeOptions();
          }}
          style={{ backgroundColor: "#333" }}
          className="btn-theme"
        ></button>
        <button
          onClick={() => {
            dispatch(setTheme("dark-red"));
            closeThemeOptions();
          }}
          style={{ backgroundColor: "red" }}
          className="btn-theme"
        ></button>
        <button
          onClick={() => {
            dispatch(setTheme("dark-blue"));
            closeThemeOptions();
          }}
          style={{ backgroundColor: "blue" }}
          className="btn-theme"
        ></button>
      </div>
    </div>
  );
};

export default SelectTheme;
