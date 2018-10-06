import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  GetUsers = '[Users] Get',
  GetUsersSuccess = '[Users] Get success',
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GetUsers;

  constructor(public payload?: any) { }
}

export class GetUsersSuccess implements Action {
  readonly type = UsersActionTypes.GetUsersSuccess;

  constructor(public payload: any) { }
}

export type UsersActions = GetUsers | GetUsersSuccess;
