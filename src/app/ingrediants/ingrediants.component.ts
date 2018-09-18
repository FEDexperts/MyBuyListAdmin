import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from '../shared/component/data-table/types/table-config';
import { RecipesService } from '../shared/services/recipes.service';

@Component({
  selector: 'app-ingrediants',
  templateUrl: './ingrediants.component.html',
  styleUrls: ['./ingrediants.component.scss']
})
export class IngrediantsComponent implements OnInit {

  public ingrediants$: Observable<any[]>;
  public tableConfig: TableConfig;
  public pagingConfig: PagingConfig;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.tableConfig = {
      displayColumns: ['FoodId', 'FoodName'],
      headerTitles: ['מספר מצרך', 'שם מצרך'],
    }
    this.pagingConfig = {
      pageIndex: 0,
      pageSizeOptions: [5, 10, 20],
      pageSize: 5,
    }
    this.ingrediants$ = this.recipesService.getIngrediant();
  }

}
