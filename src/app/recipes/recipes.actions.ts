import { Action } from '@ngrx/store';

export enum RecipesActionTypes {
  Get = '[Recipes] Get',
  Success = '[Recipes] Get success',
  Error = '[Recipes] Get failure',
}

export class GetRecipes implements Action {
  readonly type = RecipesActionTypes.Get;

  constructor(public payload?: any) { }
}

export class GetRecipesSuccess implements Action {
  readonly type = RecipesActionTypes.Success;

  constructor(public payload: any) { }
}

export type recipesActions =
  GetRecipes |
  GetRecipesSuccess;
