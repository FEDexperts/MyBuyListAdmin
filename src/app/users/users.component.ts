import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { GetUsers } from './users.actions';
import { getUsersResults, getUsersMetadata } from './users.selectors';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from '../shared/components/data-table/types/table-config';
import { filter } from 'rxjs/operators';
import { GetList } from '../shared/components/list/list.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<any>;
  public tableConfig: TableConfig;
  public pagingConfig: PagingConfig = {
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20],
    pageSize: 5,
    totalItems: 0
  };

  constructor(private store: Store<AppState>) {
    this.users$ = this.store
      .pipe(
        select(getUsersResults),
      )

    this.store
      .pipe(
        select(getUsersMetadata),
        filter(metadata => metadata),
      )
      .subscribe(metadata => {
        this.pagingConfig.totalItems = metadata.totalItems;
      });
  }

  ngOnInit() {
    this.tableConfig = {
      columns: [
        {
          field: 'Name',
          title: 'שם'
        },
        {
          field: 'Email',
          title: 'אימייל'
        }
      ]
    }

    this.store.dispatch(new GetUsers());
  }

  pageChanged(page) {
    this.store.dispatch(new GetUsers(page));
  }

}
