import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { IngrediantsComponent } from "./ingrediants.component";

const routes: Routes = [
    {
        path: '',
        component: IngrediantsComponent
    }
]

export const ingrediantsRoutes: ModuleWithProviders = RouterModule.forChild(routes);