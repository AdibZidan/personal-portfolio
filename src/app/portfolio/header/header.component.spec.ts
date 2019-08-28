import { HeaderComponent } from './header.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('Header Component', () => {

  let headerComponent: HeaderComponent;
  let headerFixture: ComponentFixture<HeaderComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    }).compileComponents()));

  beforeEach(() => {
    headerFixture = TestBed.createComponent(HeaderComponent);
    headerComponent = headerFixture.componentInstance;

    debugElement = headerFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => headerFixture.destroy());

  it('Should exist/be defined', () =>
    expect(headerComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(headerComponent instanceof HeaderComponent)
      .toBeTruthy());

  it(`Should have a 'header' tag with the 'header' class`, () => {
    const header: Element = htmlElement.querySelector('header.header');

    expect(header).toBeTruthy();
  });

  it(`Should have a 'nav' tag with the 'menu' class`, () => {
    const nav: Element = htmlElement.querySelector('nav.menu');

    expect(nav).toBeTruthy();
  });

  it(`Should have an 'ul' tag with the 'menu-navigation' class`, () => {
    const ul: Element = htmlElement.querySelector('ul.menu-navigation');

    expect(ul).toBeTruthy();
  });

  it(`Should have 3 'li' & 'a' tags with the 'navigation-item' & 'navigation-link' classes respectively`, () => {
    const totalAmountOfLiTags: number = htmlElement.querySelectorAll('li.navigation-item').length;
    const totalAmountOfATags: number = htmlElement.querySelectorAll('a.navigation-link').length;

    expect(totalAmountOfLiTags).toBe(3);
    expect(totalAmountOfATags).toBe(3);
  });

});
