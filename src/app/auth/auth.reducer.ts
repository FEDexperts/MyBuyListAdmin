import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../shared/interfaces/user.interface';
import { isNullOrUndefined } from 'util';


export interface AuthState {
  isLoggedIn: boolean,
  user: User
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        isLoggedIn: !isNullOrUndefined(action.user),
        user: action.user
      }
    default:
      return state;
  }
}
