import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';
import { AuthActionTypes, Login, Logout } from './auth.actions';
import { Router } from '@angular/router';
import { defer } from 'rxjs/internal/observable/defer';
import { of } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$
    .pipe(
      ofType<Login>(AuthActionTypes.Login),
      filter(action => !isNullOrUndefined(action.user)),
      tap(action => console.log(action.user)),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
        this.router.navigate(['/recipes']);
      }),
    )

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .pipe(
      ofType<Logout>(AuthActionTypes.Logout),
      tap(action => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }),
    )

    @Effect()
    init$ = defer(() => {
      const user = localStorage.getItem('user');
      if (user) {
        return of(new Login(JSON.parse(user)));
      } else {
        return of(new Logout());
      }
    });

  constructor(private actions$: Actions, private router: Router) { }
}
