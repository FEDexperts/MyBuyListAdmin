import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipesRoutes } from './recipes.routing';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    recipesRoutes,
    SharedModule,
  ],
  declarations: [RecipesComponent]
})
export class RecipesModule { }
