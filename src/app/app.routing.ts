import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: '../app/core/login/login.module#LoginModule',
  },
  {
    path: 'recipes',
    loadChildren: '../app/core/recipes/recipes.module#RecipesModule',
  },
  {
    path: 'ingrediants',
    loadChildren: '../app/core/ingrediants/ingrediants.module#IngrediantsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
