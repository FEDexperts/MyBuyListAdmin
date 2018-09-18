import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes',
  },
  {
    path: 'login',
    loadChildren: '../app/auth/auth.module#AuthModule',
  },
  {
    path: 'recipes',
    loadChildren: '../app/recipes/recipes.module#RecipesModule',
  },
  {
    path: 'ingrediants',
    loadChildren: '../app/ingrediants/ingrediants.module#IngrediantsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
