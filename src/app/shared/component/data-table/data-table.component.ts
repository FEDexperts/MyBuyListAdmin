import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TableConfig, PagingConfig } from './types/table-config';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: DataTableDataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.dataStream$, this.pagingConfig);
    this.paginator.pageIndex = this.pagingConfig.pageIndex;
    this.paginator.page
      .pipe(
        tap(val => this.dataSource.loadData(val.pageIndex, val.pageSize))
      )
      .subscribe();

    this.dataStream$.subscribe(val => {
      this.paginator.length = val.length;
    });
  }

}

class DataTableDataSource extends DataSource<any> {

  private _dataStreamSubject = new BehaviorSubject<any>([]);
  private _dataStream: Observable<any[]> = this._dataStreamSubject.asObservable();
  private _data: any[];

  constructor(stream: Observable<any[]>, pagingConfig: PagingConfig) {
    super();
    stream
      .pipe(
        tap(val => {
          this._data = val;
        }),
        tap(() => this.loadData(pagingConfig.pageIndex, pagingConfig.pageSize)),
      )
      .subscribe();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this._dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

  loadData(pageIndex: number, pageSize: number) {
    const arr = this._data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    this._dataStreamSubject.next(arr);
  }
}
