# Angular Polymer Starter Kit

This template is inspired by the [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) and serves to help developers with a starting point on building an app with Angular 5 and Polymer 2.

This project uses [Origami](https://github.com/hotforfeature/origami) to enable interoperability between Angular and Polymer.

## Setup

Install dependencies from npm and bower

```
npm install
bower install
```

### CLI Patch

Origami works by patching the Angular CLI. If you receive errors about your bower html imports, try running `npm run patch-cli` to re-execute the patch script.

## Development Server

This command will launch the Angular CLI dev server at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
npm start
```

## Build

Run `npm run build` to build the project for production with a service worker in the `dist/` directory.
