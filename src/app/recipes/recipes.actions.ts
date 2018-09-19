import { Action } from '@ngrx/store';
import { recipesList } from './types/recipe.interface';

export enum RecipesActionTypes {
  Get = '[Recipes] Get'
}

export class GetRecipes implements Action {
  readonly type = RecipesActionTypes.Get;
}

export type RecipesActions = GetRecipes;
