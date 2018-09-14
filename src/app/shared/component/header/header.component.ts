import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menus = [
    {
      title: 'מתכונים',
      route: '/recipes'
    },
    {
      title: 'מצרכים',
      route: '/ingrediants'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
