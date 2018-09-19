import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipesRoutes } from './recipes.routing';
import { RecipesComponent } from './recipes.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { recipesReducer } from './recipes.reducer';

@NgModule({
  imports: [
    CommonModule,
    recipesRoutes,
    SharedModule,
    StoreModule.forFeature('recipes', recipesReducer),
  ],
  declarations: [RecipesComponent],
  providers: [],
})
export class RecipesModule { }