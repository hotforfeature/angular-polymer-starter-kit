import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View2Component } from './view2.component';

const routes: Routes = [
  { path: '', component: View2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class View2RoutingModule { }
