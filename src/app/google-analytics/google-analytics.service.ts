import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let ga: Function;

@Injectable({ providedIn: 'root' })

export class GoogleAnalyticsService {

  constructor(private router: Router) { }

  public track(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview');
      }
    });
  }

}
