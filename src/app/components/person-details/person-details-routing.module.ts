import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonDetailsComponent} from "./person-details.component";

const routes: Routes = [
  {path: ':id', component: PersonDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonDetailsRoutingModule {
}
