import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {

  let footerComponent: FooterComponent;
  let footerFixture: ComponentFixture<FooterComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents()));

  beforeEach(() => {
    footerFixture = TestBed.createComponent(FooterComponent);
    footerComponent = footerFixture.componentInstance;

    debugElement = footerFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => footerFixture.destroy());

  it('Should exist/be defined', () =>
    expect(footerComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(footerComponent instanceof FooterComponent)
      .toBeTruthy());

  it(`Should return the 'current year'`, () => {
    const expectedYear: number = new Date().getFullYear();
    const actualYear: number = footerComponent.currentYear;

    expect(expectedYear).toBe(actualYear);
  });

  it(`Should have a 'footer' tag`, () => {
    const footerTag: Element = htmlElement.querySelector('footer');

    expect(footerTag).toBeTruthy();
  });

  it(`Should have a total of 2 'p' tags`, () => {
    const expectedTotalAmountOfPTag: number = htmlElement.querySelectorAll('p').length;

    expect(expectedTotalAmountOfPTag).toBe(1);
  });

  it(`Should have 1 'nav' & 'section' tags`, () => {
    const expectedNumberOfNavTags: number = htmlElement.querySelectorAll('nav').length;
    const expectedNumberOfSectionTags: number = htmlElement.querySelectorAll('section').length;

    expect(expectedNumberOfNavTags).toBe(1);
    expect(expectedNumberOfSectionTags).toBe(1);
  });

  it(`Should have 3 'a' & 'i' tags`, () => {
    const expectedNumberOfAnchorTags: number = htmlElement.querySelectorAll('a').length;
    const expectedNumberOfIconTags: number = htmlElement.querySelectorAll('i').length;

    expect(expectedNumberOfAnchorTags).toBe(2);
    expect(expectedNumberOfIconTags).toBe(2);
  });

});
