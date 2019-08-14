import { FooterComponent } from './footer.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('Footer Component', () => {

  let footerComponent: FooterComponent;
  let footerFixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    }).compileComponents()));

  beforeEach(() => {

    footerFixture = TestBed.createComponent(FooterComponent);
    footerComponent = footerFixture.componentInstance;
    debugElement = footerFixture.debugElement;
    htmlElement = debugElement.nativeElement;

  });

  it('Should exist/be defined', () =>
    expect(footerComponent
    ).toBeDefined());

  it('Should be built/compiled', () =>
    expect(footerComponent instanceof FooterComponent)
      .toBeTruthy());

  it('Should return the current year', () => {

    const expectedYear = new Date().getFullYear();
    const actualYear = footerComponent.currentYear;

    expect(expectedYear).toBe(actualYear);

  });

  it(`Should have a 'footer' tag`, () => {

    const footerTag: Element = htmlElement.querySelector('footer');

    expect(footerTag).toBeTruthy();

  });

  it(`Should have a total of 2 'p' tags`, () => {

    const expectedTotalAmountOfPTag: number = htmlElement.querySelectorAll('p').length;

    expect(expectedTotalAmountOfPTag).toBe(2);

  });

  it(`Should have 1 'nav' & 'section' tags`, () => {

    const expectedNumberOfNavTag: number = htmlElement.querySelectorAll('nav').length;

    expect(expectedNumberOfNavTag).toBe(1);

    const expectedNumberOfSectionTag: number = htmlElement.querySelectorAll('section').length;

    expect(expectedNumberOfSectionTag).toBe(1);

  });

  it(`Should have 3 'a' & 'i' tags`, () => {

    const expectedNumberOfAnchorTags: number = htmlElement.querySelectorAll('a').length;

    expect(expectedNumberOfAnchorTags).toBe(3);

    const expectedNumberOfIconTags: number = htmlElement.querySelectorAll('i').length;

    expect(expectedNumberOfIconTags).toBe(4);

  });

});
