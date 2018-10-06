import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersActionTypes, GetUsers, GetUsersSuccess } from './users.actions';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  @Effect()
  loadFoos$ = this.actions$
    .pipe(
      ofType<GetUsers>(UsersActionTypes.GetUsers),
      switchMap(action => {
        return this.authService.getUsers({
          pageIndex: action.payload ? action.payload.pageIndex : 0,
          pageSize: action.payload ? action.payload.pageSize : 5
        });
      }),
      switchMap(res => {
        return of(new GetUsersSuccess(res))
      })
    );

  constructor(private actions$: Actions, private authService: AuthService) { }
}
