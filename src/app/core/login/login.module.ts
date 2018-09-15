import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';
import { MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    loginRoutes,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
