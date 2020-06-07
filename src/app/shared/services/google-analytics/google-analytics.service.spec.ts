import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleAnalyticsService } from './google-analytics.service';

describe('Google Analytics Service', () => {

  let service: GoogleAnalyticsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(GoogleAnalyticsService);
  });

  it('Should exist/be defined', () => {
    expect(service)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(service)
      .toBeTruthy();
  });

});