import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap } from 'rxjs/operators';
import { GetListTypes, getListTypes, GetList } from './list.actions';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../../environments/environment';


@Injectable()
export class ListEffects {

  @Effect({ dispatch: false })
  getList$ = this.actions$
    .pipe(
      ofType<GetList>(...getListTypes),
      tap(action => console.log(action)),
      switchMap(action => {
        return this.apiService.get(`${environment.local}/api${action.payload.url}/list`)
      })
    )

  constructor(private actions$: Actions, private apiService: ApiService) { }
}
