import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from '../shared/components/data-table/types/table-config';
import { RecipesService } from '../shared/services/recipes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { GetList, GetListTypes } from '../shared/components/list/list.actions';

@Component({
  selector: 'app-ingrediants',
  templateUrl: './ingrediants.component.html',
  styleUrls: ['./ingrediants.component.scss']
})
export class IngrediantsComponent implements OnInit {

  public ingrediants$: Observable<any[]>;
  public tableConfig: TableConfig;
  public pagingConfig: PagingConfig = {
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20],
    pageSize: 5,
    totalItems: 0
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tableConfig = {
      columns: [
        {
          title: 'FoodId',
          field: 'מספר מצרך',
        },
        {
          title: 'FoodName',
          field: 'שם מצרך'
        }
      ]
    }

    this.store.dispatch(new GetList({
      url: '/ingrediants',
      type: GetListTypes.INGREDIANTS
    }))
  }

}
