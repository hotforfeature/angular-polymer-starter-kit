import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View404Component } from './view404/view404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view1' },
  { path: 'view1', loadChildren: 'app/view1/view1.module#View1Module' },
  { path: 'view2', loadChildren: 'app/view2/view2.module#View2Module' },
  { path: 'view3', loadChildren: 'app/view3/view3.module#View3Module' },
  { path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule' },
  { path: '**', component: View404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
