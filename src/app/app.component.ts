import { Component, ElementRef, OnInit, Optional, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-styles/typography';
import '../elements/my-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My App';
  narrow: boolean;
  @ViewChild('drawer') drawer: ElementRef;

  constructor(@Optional() swUpdate: SwUpdate, private router: Router) {
    if (swUpdate) {
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
