import { AboutComponent } from './about.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

describe('About Component', () => {

  let aboutComponent: AboutComponent;
  let aboutFixture: ComponentFixture<AboutComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        FooterComponent
      ]
    }).compileComponents()));

  beforeEach(() => {
    aboutFixture = TestBed.createComponent(AboutComponent);
    aboutComponent = aboutFixture.componentInstance;

    debugElement = aboutFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => aboutFixture.destroy());

  it('Should exist/be defined', () =>
    expect(aboutComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(aboutComponent instanceof AboutComponent)
      .toBeTruthy());

  it(`Should have a 'showArrow' property with a false value`, () =>
    expect(aboutComponent.showArrow)
      .toBe(false));

  it(`Should have 'languages' array`, () => {
    const expectedLanguages: string[] = [
      'English,', 'Arabic,',
      'Russian', '& German.'];
    const actualLanguages: string[] = aboutComponent.languages;

    expect(expectedLanguages).toEqual(actualLanguages);
  });

  it(`Should have 'frontEndStacks' array`, () => {
    const expectedFrontEndStacks: string[] = [
      'HTML5,', 'CSS3 / SCSS,',
      'JavaScript ES6+ / TypeScript',
      '& Angular 9'];
    const actualFrontEndStacks: string[] = aboutComponent.frontEndStacks;

    expect(expectedFrontEndStacks).toEqual(actualFrontEndStacks);
  });

  it(`Should have a 'backEndStack' string`, () => {
    const expectedBackEndStack = 'Node.JS & Java 8';
    const actualBackendStack: string = aboutComponent.backEndStack;

    expect(expectedBackEndStack).toBe(actualBackendStack);
  });

  it(`Should have 'otherStacks' array`, () => {
    const expectedOtherStacks: string[] = [
      'MongoDB,', 'MongooseJS,', 'Docker,', 'Git/GitHub,', 'Ubuntu,',
      'Windows 10,', 'NPM,', 'IntelliJ IDEA', '& Visual Studio Code'
    ];
    const actualOtherStacks: string[] = aboutComponent.otherStacks;

    expect(expectedOtherStacks).toEqual(actualOtherStacks);
  });

  it(`Should have my 'current age'`, () => {
    const bornYear: number = new Date('January 1, 1995').getFullYear();
    const expectedAge: number = new Date().getFullYear() - bornYear;
    const actualAge: number = aboutComponent.age;

    expect(expectedAge).toBe(actualAge);
  });

  it(`Should mimic an 'onClick' event and the value of 'showArrow' property needs to stay false`, () => {
    aboutFixture.detectChanges();

    aboutComponent.onClick();

    const isArrowShown: boolean = aboutComponent.showArrow;

    expect(isArrowShown).toBe(false);
  });

  it(`Should spy & call 'onScroll' method`, () => {
    spyOn(aboutComponent, 'onScroll').and.callThrough();

    aboutComponent.onScroll();

    expect(aboutComponent.onScroll).toHaveBeenCalled();
  });

  it(`Should spy & call 'onBottom' method`, () => {
    spyOn(aboutComponent, 'onBottom').and.callThrough();

    aboutComponent.onBottom();

    expect(aboutComponent.onBottom).toHaveBeenCalled();
  });

  it(`Should have a total of 6 'section' tags including the one from 'app-footer' tag`, () => {
    const expectedTotalAmountOfSectionTags: number = htmlElement.querySelectorAll('section').length;

    expect(expectedTotalAmountOfSectionTags).toBe(6);
  });

  it(`Should have a total of 13 'p' tags with the class of 'p'`, () => {
    const expectedTotalAmountOfPTags: number = htmlElement.querySelectorAll('p.p').length;

    expect(expectedTotalAmountOfPTags).toBe(13);
  });

  it(`Should have a total of 4 'h2' tags with the class of 'h2'`, () => {
    const expectedTotalAmountOfH2Tags: number = htmlElement.querySelectorAll('h2.h2').length;

    expect(expectedTotalAmountOfH2Tags).toBe(4);
  });

  it(`Should have a total of 3 'hr' tags`, () => {
    const expectedTotalAmountOfHrTags: number = htmlElement.querySelectorAll('hr').length;

    expect(expectedTotalAmountOfHrTags).toBe(3);
  });

  it(`Should have a total of 4 'anchor' tags including the one's from 'app-footer' tag`, () => {
    const expectedTotalAmountOfAnchorTags: number = htmlElement.querySelectorAll('a').length;

    expect(expectedTotalAmountOfAnchorTags).toBe(3);
  });

  it(`Should have a total of 3 'ul' tags with the class of 'technology-stack'`, () => {
    const expectedTotalAmountOfUlTags: number = htmlElement.querySelectorAll('ul.technology-stack').length;

    expect(expectedTotalAmountOfUlTags).toBe(3);
  });

});
