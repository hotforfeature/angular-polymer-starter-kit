import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View3Component } from './view3.component';

const routes: Routes = [
  { path: '', component: View3Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class View3RoutingModule { }
