import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { RecipesActionTypes } from './recipes.actions';


@Injectable()
export class RecipesEffects {

  constructor(private actions$: Actions) { }

  @Effect({dispatch: false})
  getRecipes$ = this.actions$
    .pipe(
      ofType(RecipesActionTypes.Get),
      tap(action => console.log(action.type)),
    )
}
