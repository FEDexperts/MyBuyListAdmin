import { Action } from '@ngrx/store';

export interface ListDef {
  url: string;
  type: string
}

export enum GetListTypes {
  USERS = 'USERS',
  RECIPES = 'RECIPES',
  INGREDIANTS = 'INGREDIANTS',
}

export const getListTypes = Object.keys(GetListTypes).map(key => GetListTypes[key]);

export enum ListActionTypes {
  GetList = '[List] Get',
}

export class GetList implements Action {
  readonly type: string;

  constructor(public payload: ListDef) {
    this.type = payload.type;
  }
}

export type ListActions = GetList;
