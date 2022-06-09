import { categories } from "../../data";

const INITIAL_STATE = {
  collections: categories
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      default:
        return state
  } 
}

export default categoryReducer; 