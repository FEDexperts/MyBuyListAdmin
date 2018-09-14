import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from '../../shared/component/data-table/types/table-config';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recipes$: Observable<any[]>;
  public tableConfig: TableConfig;
  public pagingConfig: PagingConfig;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.tableConfig = {
      displayColumns: ['RecipeId', 'RecipeName'],
      headerTitles: ['מספר מתכון', 'שם מתכון'],
    }
    this.pagingConfig = {
      pageIndex: 0,
      pageSizeOptions: [5, 10, 20],
      pageSize: 5,
    }
    this.recipes$ = this.recipesService.getRecipes();
  }

}
