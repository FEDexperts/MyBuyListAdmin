import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<any> {
    return this.http.get(`${environment.local}/api/recipes/list`);
  }

  public getIngrediant(): Observable<any> {
    return this.http.get(`${environment.local}/api/recipes/ingrediants`)
  }
}
 