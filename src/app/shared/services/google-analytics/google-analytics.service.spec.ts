import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleAnalyticsService } from './google-analytics.service';

describe('Google Analytics Service', () => {

  let service: GoogleAnalyticsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(GoogleAnalyticsService);
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

});
