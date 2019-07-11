import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Should create the application', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const application = fixture.debugElement.componentInstance;
    expect(application).toBeTruthy();
  });
});
