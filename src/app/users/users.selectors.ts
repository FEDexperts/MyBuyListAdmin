import { createSelector } from "@ngrx/store";

export const usersState = state => state.users;

export const getUsersResults = createSelector(
    usersState,
    users => users.results
)

export const getUsersMetadata = createSelector(
    usersState,
    users => users.metadata
)