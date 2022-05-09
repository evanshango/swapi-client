import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsRoutingModule } from './person-details-routing.module';
import { PersonDetailsComponent } from './person-details.component';
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonDetailsRoutingModule, CoreModule
  ]
})
export class PersonDetailsModule { }
