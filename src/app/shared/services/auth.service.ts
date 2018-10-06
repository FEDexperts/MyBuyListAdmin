import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User, Credentials } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  public login(credentials: Credentials): Observable<User> {
    return this.api.get(`${environment.local}/login`, credentials)
  }

  public getUsers(params: {pageIndex: number, pageSize: number}) {
    return this.api.get(`${environment.local}/api/users/list`, params);
  }
}
