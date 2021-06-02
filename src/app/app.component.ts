import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { easeIn } from '@animations';
import { GoogleAnalyticsService } from '@shared/services/google-analytics/google-analytics.service';
import { TitleService } from '@shared/services/title/title.service';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeIn]
})
export class AppComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();

  constructor(
    private titleService: TitleService,
    private ngcCookieConsentService: NgcCookieConsentService,
    private cookieService: CookieService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) { }

  public ngOnInit(): void {
    this.dynamicallyChangeRouteUrl();
    this.allowRequestsOnlyOnCookieAcceptance();
    this.hideCookieConsentPopUpOnConsent();
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public dynamicallyChangeRouteUrl(): void {
    this.titleService.setTitle();
  }

  public prepare(routerOutlet: RouterOutlet): RouterOutlet {
    return this.getAnimation(routerOutlet);
  }

  private allowRequestsOnlyOnCookieAcceptance(): void {
    this._subscription = this.ngcCookieConsentService
      .statusChange$.subscribe((): void =>
        this.onClick()
      );
  }

  private onClick(): void {
    if (!this.ngcCookieConsentService.hasConsented()) {
      this.cookieService.deleteAll();
    } else {
      this.googleAnalyticsService.track();
      this.hideCookieConsentPopUpOnConsent();
    }
  }

  private hideCookieConsentPopUpOnConsent(): void {
    if (this.ngcCookieConsentService.hasConsented()) {
      this.ngcCookieConsentService.destroy();
    }
  }

  private getAnimation(routerOutlet: RouterOutlet): RouterOutlet {
    return routerOutlet &&
      routerOutlet.activatedRouteData &&
      routerOutlet.activatedRouteData.animation;
  }

}
