import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { loginRoutes } from './auth.routing';
import { MatCardModule, MatInputModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    loginRoutes,
    SharedModule,
    MatCardModule,
    MatInputModule,
    // StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  providers: [AuthEffects, AuthGuard]
})
export class AuthModule { }
