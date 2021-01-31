import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePageModule } from './one-page/one-page.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./one-page/one-page.module')
    .then(m => m.OnePageModule)
  },
  { path:'**', component: OnePageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
