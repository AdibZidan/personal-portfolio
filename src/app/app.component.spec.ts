import { AppComponent } from './app.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './portfolio/header/header.component';
import { RouterOutlet } from '@angular/router';

describe('Application Component', () => {

  let appComponent: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  let routerOutlet: RouterOutlet;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
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
        { provide: RouterOutlet }
      ]
    }).compileComponents()));

  beforeEach(() => {
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;

    routerOutlet = TestBed.get(RouterOutlet);

    debugElement = appFixture.debugElement;
    htmlElement = debugElement.nativeElement;

    appFixture.detectChanges();
  });

  afterEach(() => appFixture.destroy());

  it('Should exist/be defined', () =>
    expect(appComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(appComponent instanceof AppComponent)
      .toBeTruthy());

  it(`Should spy & call 'prepare' method`, () => {
    spyOn(appComponent, 'prepare').and.callThrough();

    appFixture.detectChanges();

    expect(appComponent.prepare).toHaveBeenCalled();
  });

  it(`Should have an 'app-header' tag`, () => {
    const appHeader: Element = htmlElement.querySelector('app-header');

    expect(appHeader).toBeTruthy();
  });

  it(`Should have a 'section' tag`, () => {
    const section: Element = htmlElement.querySelector('section');

    expect(section).toBeTruthy();
  });

  it(`Should have a 'router-outlet' tag`, () => {
    const routerOutletTag: Element = htmlElement.querySelector('router-outlet');

    expect(routerOutletTag).toBeTruthy();
  });

});
