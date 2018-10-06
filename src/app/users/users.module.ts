import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersRoutes } from './users.routing';
import { UsersComponent } from './users.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './users.reducer';
import { UsersEffects } from './users.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    usersRoutes,
    SharedModule,
    StoreModule.forFeature('users', fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
