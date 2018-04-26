import { webcomponentsReady } from '@codebakery/origami';

// webpack's require will be available at runtime
declare const require: any;

webcomponentsReady().then(() => {
  // We cannot import any Polymer elements before this promise resolves.
  // Since main.ts imports AppComponent (which imports Polymer), we need to
  // delay importing it.

  // When "boot.ts" is our main entrypoint, the Angular CLI can't analyze the
  // bootstrap code since it's dynamically imported. We must add an
  // "entryModule" to tsconfig.json to let the CLI know which module is being
  // bootstrapped.
  require('./main');
}).catch(err => console.log(err));

// This is ONLY required if the entrypoint to the app ("main.ts") directly
// imports Polymer AND you are supporting a browser that does not support
// custom elements and needs to wait for polyfills.

// Some other potential solutions:

// 1. Do not import Polymer in "main.ts". You can do this by changing
// AppComponent to be a small shell that lazily imports the main component that
// uses Polymer with routes, similar to how this project uses lazy imports in
// app-routing.module.ts.

// 2. Force polyfills by using webcomponents-lite.js instead of
// webcomponents-loader.js in index.html

// There is another way to handle this problem
// When handling the problem like this, the Angular CLI can't analyze the
// dynamic bootstrap code. We must add an "entryModule" to tsconfig.json


// Another way of refactoring the project would be to change AppComponent to
// be a small shell that lazily imports the main component that uses Polymer
// with routes, similar to how this project uses lazy imports in
// app-routing.module.ts.
