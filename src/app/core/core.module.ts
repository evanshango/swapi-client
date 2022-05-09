import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { SearchComponent } from './search/search.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CustomTableComponent,
    SearchComponent,
    PaginationComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    NavbarComponent, CustomTableComponent, SearchComponent, PaginationComponent, LoadingComponent
  ]
})
export class CoreModule { }
