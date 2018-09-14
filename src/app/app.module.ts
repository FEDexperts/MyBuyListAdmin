import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.inerceptor';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './core/layout/layout.component';

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
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
