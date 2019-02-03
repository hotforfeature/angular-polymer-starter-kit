import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrigamiModule } from '@codebakery/origami';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    OrigamiModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DemoComponent
  ]
})
export class DemoModule { }
