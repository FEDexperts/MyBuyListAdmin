import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableConfig, PagingConfig } from '../shared/components/data-table/types/table-config';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { GetRecipes } from './recipes.actions';
import { getRecipesSuccessState, getRecipesMetadataState } from './recipes.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recipesResults$: Observable<any[]>;
  public recipesMetadata$: Observable<any>;
  public tableConfig: TableConfig;
  public pagingConfig: PagingConfig = {
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20],
    pageSize: 5,
    totalItems: 0
  };

  constructor(private store: Store<AppState>) {
    this.recipesResults$ = store
      .pipe(
        select(getRecipesSuccessState)
      )

    store
      .pipe(
        select(getRecipesMetadataState),
        filter(metadata => metadata)
      )
      .subscribe(metadata => {
        this.pagingConfig.totalItems = metadata.totalItems;
      })
  }

  ngOnInit() {
    this.tableConfig = {
      columns: [
        {
          title: 'מספר מתכון',
          field: 'RecipeId',
        },
        {
          title: 'שם מתכון',
          field: 'RecipeName',
        },
        {
          title: 'מצרכים',
          field: 'Ingrediants',
        }
      ]
    }


    this.store.dispatch(new GetRecipes());
  }

  pageChanged(page: any) {
    this.store.dispatch(new GetRecipes(page));
  }

}
