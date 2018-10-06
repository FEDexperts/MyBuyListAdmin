import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { map, tap, switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Logout } from './auth/auth.actions';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MybuyListAdmin';

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  menus = [
    {
      route: '/users',
      icon: 'person',
      title: 'Users'
    },
    {
      route: '/recipes',
      icon: 'receipt',
      title: 'Recips'
    },
    {
      route: '/ingrediants',
      icon: 'list',
      title: 'Ingrediants'
    }
  ]

  constructor(private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
  }

  logout() {
    this.router.navigate(['/login']);
    this.store.dispatch(new Logout());
  }
}
