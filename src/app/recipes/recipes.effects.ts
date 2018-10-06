import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, mergeMap, switchMap, map } from 'rxjs/operators';
import { recipesActions, RecipesActionTypes, GetRecipes, GetRecipesSuccess } from './recipes.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { RecipesService } from '../shared/services/recipes.service';


@Injectable()
export class RecipesEffects {

  constructor(private actions$: Actions, private recipesService: RecipesService) { }

  @Effect()
  getRecipes$ = this.actions$
    .pipe(
      ofType<GetRecipes>(RecipesActionTypes.Get),
      switchMap(action => {
        return this.recipesService.getRecipes({
          pageIndex: action.payload ? action.payload.pageIndex : 0,
          pageSize: action.payload ? action.payload.pageSize : 5
        });
      }),
      switchMap(res => {
        return of(new GetRecipesSuccess(res))
      })
    )
}
