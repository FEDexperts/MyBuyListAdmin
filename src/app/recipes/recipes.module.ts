import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipesRoutes } from './recipes.routing';
import { RecipesComponent } from './recipes.component';
import { StoreModule } from '@ngrx/store';
import * as fromRecipes from './recipes.reducer';
import { SharedModule } from '../shared/shared.module';

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