import { createSelector } from "reselect";

const selectCategory = state => state.categories;

export const SelectCategories = createSelector([selectCategory], (categories) => {
    return categories.collections
})