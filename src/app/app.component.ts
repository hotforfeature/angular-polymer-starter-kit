import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import 'app-layout/app-drawer/app-drawer.html';
import 'app-layout/app-drawer-layout/app-drawer-layout.html';
import 'app-layout/app-header/app-header.html';
import 'app-layout/app-header-layout/app-header-layout.html';
import 'app-layout/app-scroll-effects/app-scroll-effects.html';
import 'app-layout/app-toolbar/app-toolbar.html';
import 'paper-icon-button/paper-icon-button.html';
import 'paper-styles/typography.html';

import '../elements/my-icons.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My App';
  narrow: boolean;
  @ViewChild('drawer') drawer: ElementRef;

  constructor(swUpdate: SwUpdate, private router: Router) {
    swUpdate.available.subscribe(() => {
      swUpdate.activateUpdate();
    }, () => {
      // Service worker not supported
    });

    swUpdate.activated.subscribe(() => {
      console.log('new version from service worker, reload window to update');
    }, () => {
      // Service worker not supported
    });

    swUpdate.checkForUpdate().catch(() => {
      // Service worker not supported
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Close a non-persistent drawer when the page & route are changed.
        if (!this.drawer.nativeElement.persistent) {
          this.drawer.nativeElement.close();
        }
      }
    });
  }
}
