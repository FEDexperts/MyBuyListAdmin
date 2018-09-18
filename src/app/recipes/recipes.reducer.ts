import { RecipesActions, RecipesActionTypes } from './recipes.actions';
import { recipesList } from './types/recipe.interface';


export interface RecipesState {
  length: number,
  list: recipesList
}

export const initialState: RecipesState = {
  length: undefined,
  list: []
};

export function recipesReducer(state: RecipesState = initialState, action: RecipesActions): RecipesState {
  switch (action.type) {
    case RecipesActionTypes.LoadRecipes:
      return {
        length: action.payload.length,
        list: action.payload
      };
    default:
      return state;
  }
}
