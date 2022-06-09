import { sliderItems } from "../../data";

const INITIAL_STATE = {
  slidersItem: sliderItems
}

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      default:
        return state
  } 
}

export default sliderReducer;  