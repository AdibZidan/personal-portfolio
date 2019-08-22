import { AboutComponent } from './about.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { of } from 'rxjs';

describe('About Component', () => {

  let aboutComponent: AboutComponent;
  let aboutFixture: ComponentFixture<AboutComponent>;

  let titleService: Title;

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

    titleService = TestBed.get(Title);

    debugElement = aboutFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist/be defined', () =>
    expect(aboutComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(aboutComponent instanceof AboutComponent)
      .toBeTruthy());

  it(`Should have a 'showArrow' with a false value`, () =>
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
      '& Angular 8'];
    const actualFrontEndStacks: string[] = aboutComponent.frontEndStacks;

    expect(expectedFrontEndStacks).toEqual(actualFrontEndStacks);
  });

  it(`Should have a 'backEndStack' string`, () => {
    const expectedBackEndStack = 'Node.JS';
    const actualBackendStack: string = aboutComponent.backEndStack;

    expect(expectedBackEndStack).toBe(actualBackendStack);
  });

  it(`Should have 'otherStacks' array`, () => {
    const expectedOtherStacks: string[] = [
      'Docker,', 'Git/GitHub,', 'Ubuntu,',
      'Windows 10,', 'NPM', '& Visual Studio Code'];
    const actualOtherStacks: string[] = aboutComponent.otherStacks;

    expect(expectedOtherStacks).toEqual(actualOtherStacks);
  });

  it(`Should have my 'current age'`, () => {
    const bornYear: number = new Date('January 1, 1995').getFullYear();
    const expectedAge: number = new Date().getFullYear() - bornYear;
    const actualAge: number = aboutComponent.age;

    expect(expectedAge).toBe(actualAge);
  });

  it(`Should have an empty 'title' before 'ngOnInit'`, () => {
    const expectedTitle = '';
    const actualTitle: string = titleService.getTitle();

    expect(expectedTitle).toBe(actualTitle);
  });

  it(`Should change the title to 'About Me' after 'ngOnInit'`, () => {
    aboutFixture.detectChanges();

    const expectedTitle = 'About Me';
    const actualTitle: string = titleService.getTitle();

    expect(expectedTitle).toBe(actualTitle);
  });

  it(`Should mimic an 'onClick' event and the value of 'showArrow' property needs to stay false`, () => {
    aboutFixture.detectChanges();

    aboutComponent.onClick();

    const isArrowShown: boolean = aboutComponent.showArrow;

    expect(isArrowShown).toBeFalsy();
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

    expect(expectedTotalAmountOfAnchorTags).toBe(4);
  });

  it(`Should have a total of 3 'ul' tags with the class of 'technology-stack'`, () => {
    const expectedTotalAmountOfUlTags: number = htmlElement.querySelectorAll('ul.technology-stack').length;

    expect(expectedTotalAmountOfUlTags).toBe(3);
  });

});
