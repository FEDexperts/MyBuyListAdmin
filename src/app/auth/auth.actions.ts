import { Action } from '@ngrx/store';
import { User } from '../shared/interfaces/user.interface';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public user: User) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = Login | Logout;
