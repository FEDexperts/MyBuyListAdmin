import { Action } from '@ngrx/store';
import { recipesList } from './types/recipe.interface';

export enum RecipesActionTypes {
  LoadRecipes = '[Recipes] Load Recipes'
}

export class LoadRecipes implements Action {
  readonly type = RecipesActionTypes.LoadRecipes;

  constructor(public payload: recipesList) {
  }
}

export type RecipesActions = LoadRecipes;
