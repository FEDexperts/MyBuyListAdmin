import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatTabsModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './components/list/list.effects';
import { LoaderComponent } from './components/loader/loader.component';
import { MatCellResizeDirective } from './components/data-table/directives/cell-resize.directive';

const MATERIAL = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([ListEffects])
  ],
  declarations: [
    DataTableComponent, 
    ListComponent, 
    LoaderComponent,
    MatCellResizeDirective
  ],
  exports: [DataTableComponent, LoaderComponent],
})
export class SharedModule { }
