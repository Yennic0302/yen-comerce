import { combineReducers } from "redux";
import productsCartReducer from "./productsCartReducer/productsCartReducer";
import productsDataReducer from "./productsDataReducer/productsDataReducer";
import themeReducer from "./themeReducer/themeReducer";

const reducer = combineReducers({
  productsDB: productsDataReducer,
  shoppingCart: productsCartReducer,
  themeColor: themeReducer,
});

export default reducer;
