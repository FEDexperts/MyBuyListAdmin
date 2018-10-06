import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
]

export const usersRoutes: ModuleWithProviders = RouterModule.forChild(routes);