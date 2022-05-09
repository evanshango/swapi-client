import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {
    path: 'persons',
    loadChildren: () => import('./components/person-details/person-details.module').then(m => m.PersonDetailsModule)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
