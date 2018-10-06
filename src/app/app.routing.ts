import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'login',
    loadChildren: '../app/auth/auth.module#AuthModule',
  },
  {
    path: 'recipes',
    loadChildren: '../app/recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuard],
    data: {
      title: 'Recipes'
    }
  },
  {
    path: 'users',
    loadChildren: '../app/users/users.module#UsersModule',
    canActivate: [AuthGuard],
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
