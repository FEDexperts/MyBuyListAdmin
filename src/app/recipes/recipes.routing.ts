import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent,
    }
]

export const recipesRoutes: ModuleWithProviders = RouterModule.forChild(routes);