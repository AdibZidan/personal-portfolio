import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { allowCookies, changeCookeConsentStatus, deleteCookies } from '@shared/helpers/consent.helper';
import { GoogleAnalyticsService } from '@shared/services/google-analytics/google-analytics.service';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentConfig, NgcCookieConsentService, WindowService } from 'ngx-cookieconsent';
import { of } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleService } from './shared/services/title/title.service';

describe('Application Component', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let titleService: TitleService;
  let routerOutlet: RouterOutlet;
  let title: Title;
  let ngcCookieConsentService: NgcCookieConsentService;
  let cookieService: CookieService;
  let googleAnalyticsService: GoogleAnalyticsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      providers: [
        NgcCookieConsentService,
        NgcCookieConsentConfig,
        WindowService,
        {
          provide: RouterOutlet,
          useValue: {
            activatedRouteData: {
              animation: 'Test animation',
              title: 'Test title'
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    (window as any).ga = jasmine.createSpy('ga');
    (window as any).gtag = jasmine.createSpy('gtag');

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    titleService = TestBed.inject(TitleService);
    routerOutlet = TestBed.inject(RouterOutlet);
    title = TestBed.inject(Title);
    ngcCookieConsentService = TestBed.inject(NgcCookieConsentService);
    cookieService = TestBed.inject(CookieService);
    googleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Methods', () => {
    let titleServiceSpy: jasmine.Spy;
    let cookieServiceDeleteAllSpy: jasmine.Spy;
    let googleAnalyticsServiceTrackSpy: jasmine.Spy;
    let ngcCookieConsentServiceDestroySpy: jasmine.Spy;

    beforeEach(() => {
      titleServiceSpy = spyOn(titleService, 'setTitle');
      cookieServiceDeleteAllSpy = spyOn(cookieService, 'deleteAll');
      googleAnalyticsServiceTrackSpy = spyOn(googleAnalyticsService, 'track');
      ngcCookieConsentServiceDestroySpy = spyOn(ngcCookieConsentService, 'destroy');
      component.ngOnInit();
    });

    afterEach(() => {
      deleteCookies(cookieService);
    });

    it(`Should change the route's title`, () => {
      spyOn(
        router.events,
        'pipe'
      ).and.returnValue(
        of(new NavigationEnd(0, 'with', 'google-analytics'))
      );

      expect(title.getTitle()).toEqual('Test Title');
    });

    it(`Should delete all the cookies if the user doesn't consent`, () => {
      changeCookeConsentStatus(ngcCookieConsentService);

      expect(ngcCookieConsentService.hasConsented()).toEqual(false);
      expect(cookieServiceDeleteAllSpy).toHaveBeenCalled();
      expect(cookieServiceDeleteAllSpy).toHaveBeenCalledTimes(1);
    });

    it('Should initialize Google tracking and hide the cookie consent popup message', () => {
      allowCookies(cookieService);
      changeCookeConsentStatus(ngcCookieConsentService);

      expect(googleAnalyticsServiceTrackSpy).toHaveBeenCalled();
      expect(googleAnalyticsServiceTrackSpy).toHaveBeenCalledTimes(1);
      expect(ngcCookieConsentServiceDestroySpy).toHaveBeenCalled();
      expect(ngcCookieConsentServiceDestroySpy).toHaveBeenCalledTimes(1);
    });

    it('Should prepare the router outlet', () => {
      spyOn(
        component,
        'prepare'
      ).and.callThrough();

      component.prepare(routerOutlet);

      expect(component.prepare).toHaveBeenCalledWith({
        activatedRouteData: {
          animation: 'Test animation',
          title: 'Test title'
        }
      } as any);
    });
  });

});
