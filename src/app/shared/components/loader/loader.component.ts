import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart, RoutesRecognized, NavigationEnd } from '@angular/router';
import { tap, filter, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading$: Observable<boolean>

  constructor(private router: Router) { }

  ngOnInit() {
    this.loading$ = this.router.events
      .pipe (
        filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof RoutesRecognized),
        switchMap(event => [event instanceof NavigationStart || event instanceof RoutesRecognized]),
      )
  }

}
