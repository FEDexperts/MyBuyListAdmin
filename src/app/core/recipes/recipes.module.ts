import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipesRoutes } from './recipes.routing';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromRecipes from '../../store/reducers/recipes/recipes.reducer';

@NgModule({
  imports: [
    CommonModule,
    recipesRoutes,
    SharedModule,
    StoreModule.forFeature('recipes', fromRecipes.recipesReducer),
  ],
  declarations: [RecipesComponent]
})
export class RecipesModule { }
