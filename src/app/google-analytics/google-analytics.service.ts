import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let ga: Function;

@Injectable({ providedIn: 'root' })

export class GoogleAnalyticsService {

  constructor(private router: Router) { }

  public track(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        ga('set', 'page', navigationEnd.urlAfterRedirects);
        ga('send', 'pageview');
      });
  }

}
