import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Add type for Webpack's require function
declare function require(id: string): any;

webcomponentsReady().then(() => {
  // We cannot import any Polymer elements before this promise resolves.
  // Since AppModule imports AppComponent, which imports Polymer, we need to
  // delay importing it. We can do this with webpack's require.
  // When handling the problem like this, the Angular CLI can't analyze the
  // dynamic bootstrap code. We must add an "entryModule" to tsconfig.json

  // Again, this is ONLY required if the app's entry module also imports
  // any Polymer element.

  // Another way of refactoring the project would be to change AppComponent to
  // be a small shell that lazily imports the main component that uses Polymer
  // with routes, similar to how this project uses lazy imports in
  // app-routing.module.ts.
  const { AppModule } = require('./app/app.module');
  return platformBrowserDynamic().bootstrapModule(AppModule);
}).catch(err => console.log(err));
