import { PortfolioComponent } from './portfolio.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Portfolio Component', () => {

  let portfolioComponent: PortfolioComponent;
  let portfolioFixture: ComponentFixture<PortfolioComponent>;

  let titleService: Title;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      providers: [Title]
    }).compileComponents()));

  beforeEach(() => {
    portfolioFixture = TestBed.createComponent(PortfolioComponent);
    portfolioComponent = portfolioFixture.componentInstance;

    titleService = TestBed.get(Title);

    debugElement = portfolioFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () =>
    expect(portfolioComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(portfolioComponent instanceof PortfolioComponent)
      .toBeTruthy());

  it(`Should change the title to 'Portfolio' after 'ngOnInit'`, () => {
    portfolioFixture.detectChanges();

    const expectedTitle = 'Portfolio';
    const actualTitle: string = titleService.getTitle();

    expect(expectedTitle).toBe(actualTitle);
  });

  it(`Should have a 'main' tag with the class of 'home'`, () => {
    const main: Element = htmlElement.querySelector('main.home');

    expect(main).toBeTruthy();
  });

  it(`Should have an 'h1' tag with the class of 'h1'`, () => {
    const h1: Element = htmlElement.querySelector('h1.h1');

    expect(h1).toBeTruthy();
  });

  it(`Should have an 'h2' tag with the class of 'h2'`, () => {
    const h2: Element = htmlElement.querySelector('h2.h2');

    expect(h2).toBeTruthy();
  });

  it(`Should have a 'section' tag with the class of 'social-media'`, () => {
    const section: Element = htmlElement.querySelector('section.social-media');

    expect(section).toBeTruthy();
  });

  it(`Should have a total of 3 'anchor' tags`, () => {
    const totalNumberOfAnchors: number = htmlElement.querySelectorAll('a').length;

    expect(totalNumberOfAnchors).toBe(3);
  });

  it(`Should have a total of 3 'icon' tags`, () => {
    const totalNumberOfIcons: number = htmlElement.querySelectorAll('i').length;

    expect(totalNumberOfIcons).toBe(3);
  });

});
