import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View1Component } from './view1.component';

const routes: Routes = [
  { path: '', component: View1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class View1RoutingModule { }
