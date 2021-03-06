import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

export const loginRoutes: ModuleWithProviders = RouterModule.forChild(routes);