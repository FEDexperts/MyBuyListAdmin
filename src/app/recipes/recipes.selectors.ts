import { createSelector } from "@ngrx/store";

export const selectRecipesState = state => state.recipes;

export const getRecipesSuccessState = createSelector(
    selectRecipesState,
    recipes => recipes.results
)
export const getRecipesMetadataState = createSelector(
    selectRecipesState,
    recipes => recipes.metadata
)