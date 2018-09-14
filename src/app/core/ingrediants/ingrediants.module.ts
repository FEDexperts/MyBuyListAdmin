import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngrediantsComponent } from './ingrediants.component';
import { ingrediantsRoutes } from './ingrediants.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ingrediantsRoutes,
    SharedModule,
  ],
  declarations: [IngrediantsComponent]
})
export class IngrediantsModule { }
