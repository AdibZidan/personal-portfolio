import { AppComponent } from './app.component';

import { HeaderComponent } from './portfolio/header/header.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing'

describe('Application Component', () => {

  let appComponent: AppComponent, appFixture: ComponentFixture<AppComponent>;

  beforeAll(async(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent]
    }).compileComponents()));

  beforeAll(() => {

    appFixture = TestBed.createComponent(AppComponent);

    appComponent = appFixture.componentInstance;

  });

  it('Should exist/be defined', () => expect(appComponent).toBeDefined());

  it('Should be built/compiled', () => expect(appComponent instanceof AppComponent).toBeTruthy());

});