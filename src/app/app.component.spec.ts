import { AppComponent } from './app.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './portfolio/header/header.component';

describe('Application Component', () => {

  let appComponent: AppComponent,
    appFixture: ComponentFixture<AppComponent>,
    debugElement: DebugElement,
    htmlElement: HTMLElement;

  beforeAll(async(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [AppComponent, HeaderComponent]
    }).compileComponents()));

  beforeAll(() => {

    appFixture = TestBed.createComponent(AppComponent);

    appComponent = appFixture.componentInstance;

    debugElement = appFixture.debugElement;

    htmlElement = debugElement.nativeElement;

    appFixture.detectChanges();

  });

  it('Should exist/be defined', () => expect(appComponent).toBeDefined());

  it('Should be built/compiled', () => expect(appComponent instanceof AppComponent).toBeTruthy());

});
