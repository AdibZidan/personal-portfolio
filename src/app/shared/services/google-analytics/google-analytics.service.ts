import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  public constructor(
    private router: Router,
    private ngcCookieConsentService: NgcCookieConsentService
  ) {
    this.track();
  }

  public track(): void {
    if (this.ngcCookieConsentService.hasConsented()) {
      this.setTrackingAfterConsenting(this.router);

      this.router.events
        .pipe(filter((event: Event) => event instanceof NavigationEnd))
        .subscribe((navigationEnd: NavigationEnd): void => {
          gtag(
            'config',
            'UA-145386393-1',
            { page_path: navigationEnd.urlAfterRedirects }
          );
        });
    }
  }

  private setTrackingAfterConsenting(router: Router): void {
    let isExecuted: boolean = false;

    return ((): void => {
      if (!isExecuted) {
        isExecuted = true;

        gtag(
          'config',
          'UA-145386393-1',
          { page_path: router.url }
        );
      }
    })();
  }

}
