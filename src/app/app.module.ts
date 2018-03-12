import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PolymerModule } from '@codebakery/origami';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View404Component } from './view404/view404.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js'),
    PolymerModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    View404Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
