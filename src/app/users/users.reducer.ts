import { UsersActions, UsersActionTypes } from './users.actions';

export interface UsersState {
  metadata: any;
  results: any
}

export const initialState: UsersState = {
  metadata: undefined,
  results: []
};

export function reducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {

    case UsersActionTypes.GetUsers:
      return state;

    case UsersActionTypes.GetUsersSuccess:
      return Object.assign({}, state, { metadata: action.payload.metadata, results: action.payload.results });

    default:
      return state;
  }
}
