import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../shared/interfaces/user.interface';


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
        isLoggedIn: true,
        user: action.user
      }
    default:
      return state;
  }
}
