import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './component/data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatButtonModule
  ],
  declarations: [DataTableComponent, HeaderComponent],
  exports: [DataTableComponent, HeaderComponent],
})
export class SharedModule { }
