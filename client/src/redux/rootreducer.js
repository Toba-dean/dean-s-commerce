import { combineReducers } from "redux";

import categoryReducer from "./category/category.reducer";
import sliderReducer from "./slider/slider.reducer";

export const rootReducers = combineReducers({
  categories: categoryReducer,
  slider: sliderReducer
})