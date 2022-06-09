import { createSelector } from "reselect";

const sliderInput = state => state.slider;

export const sliderPrev = createSelector([sliderInput], (slider) => {
  return slider.slidersItem
})