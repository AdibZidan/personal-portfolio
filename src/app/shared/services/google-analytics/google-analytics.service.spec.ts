import { TestBed, waitForAsync } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GoogleAnalyticsService } from './google-analytics.service';

describe('Google Analytics Service', () => {

  let service: GoogleAnalyticsService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{
        provide: Router,
        useValue: {
          events: of(new NavigationEnd(0, 'test', 'with google analytics')),
        }
      }]
    });
  }));

  beforeEach(() => {
    (<any>window).ga = jasmine.createSpy('ga');

    service = TestBed.inject(GoogleAnalyticsService);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    (<any>window).ga = undefined;
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

  describe('Methods', () => {
    it('Should track', () => {
      service.track();

      expect((<any>window).ga).toHaveBeenCalledWith('set', 'page', 'with google analytics');
      expect((<any>window).ga).toHaveBeenCalledWith('send', 'pageview');
    });
  });

});
