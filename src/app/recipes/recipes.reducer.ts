import { recipesActions, RecipesActionTypes } from './recipes.actions';
import { recipesList } from './types/recipe.interface';


export interface RecipesState {
  metadata: any,
  results: recipesList
}

export const initialState: RecipesState = {
  metadata: undefined,
  results: []
};

export function recipesReducer(state: RecipesState = initialState, action: recipesActions): RecipesState {
  switch (action.type) {
    case RecipesActionTypes.Success:
      return {
        metadata: action.payload.metadata,
        results: action.payload.results
      };
    default:
      return state;
  }
}
