import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.inerceptor';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './core/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
