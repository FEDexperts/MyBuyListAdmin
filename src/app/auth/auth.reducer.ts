import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../shared/interfaces/user.interface';


export interface AuthState {
  loggedIn: boolean,
  userProfile: User
}

export const initialState: AuthState = {
  loggedIn: false,
  userProfile: undefined
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        loggedIn: true,
        userProfile: action.user
      }
    default:
      return state;
  }
}
