import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { allowCookies, changeCookeConsentStatus, deleteCookies } from '@shared/helpers/consent.helper';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentConfig, NgcCookieConsentService, WindowService } from 'ngx-cookieconsent';
import { of } from 'rxjs';
import { GoogleAnalyticsService } from './google-analytics.service';

describe('Google Analytics Service', () => {

  let googleAnalyticsService: GoogleAnalyticsService;
  let router: Router;
  let ngcCookieConsentService: NgcCookieConsentService;
  let cookieService: CookieService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        NgcCookieConsentService,
        WindowService,
        NgcCookieConsentConfig,
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(0, 'test', 'with google analytics')),
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    (window as any).gtag = jasmine.createSpy('gtag');
    googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    router = TestBed.inject(Router);
    ngcCookieConsentService = TestBed.inject(NgcCookieConsentService);
    cookieService = TestBed.inject(CookieService);
  });

  afterEach(() => {
    (window as any).gtag = undefined;
    deleteCookies(cookieService);
  });

  it('Should create', () => {
    expect(googleAnalyticsService).toBeTruthy();
  });

  describe('Methods', () => {
    it(`Shouldn't track if there's no user consent`, () => {
      googleAnalyticsService.track();

      expect((window as any).gtag).not.toHaveBeenCalled();
    });

    it('Should track only after consenting', () => {
      allowCookies(cookieService);
      changeCookeConsentStatus(ngcCookieConsentService);

      googleAnalyticsService.track();

      expect((window as any).gtag).toHaveBeenCalledWith(
        'config', 'UA-145386393-1',
        {
          page_path: 'with google analytics'
        }
      );
    });
  });

});
