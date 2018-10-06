import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from './types/table-config';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() dataStream$: Observable<any[]>;
  @Input() tableConfig: TableConfig;
  @Input() pagingConfig: PagingConfig;
  @Output() onPageChange = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  _fields: string[];

  constructor() { }

  ngOnInit() {
    this._fields = this.tableConfig.columns.map(col => col.field);
    this.paginator.page
      .pipe(
        tap(page => this.onPageChange.emit(page))
      )
      .subscribe();
  }

}
