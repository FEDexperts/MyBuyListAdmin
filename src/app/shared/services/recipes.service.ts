import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private api: ApiService) { }

  public getRecipes(params: {pageIndex: number, pageSize: number}): Observable<any[]> {
    return this.api.get(`${environment.local}/api/recipes/list`, params);
  }

  public getIngrediant(): Observable<any[]> {
    return this.api.get(`${environment.local}/api/recipes/ingrediants`)
  }
}
 