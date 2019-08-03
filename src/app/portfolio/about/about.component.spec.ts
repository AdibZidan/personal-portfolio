import { AboutComponent } from "./about.component";

import { Title } from '@angular/platform-browser';

describe('About Component', () => {

  let aboutComponent: AboutComponent, titleService: Title;

  it('Should exist', () => expect(AboutComponent).toBeDefined());

  beforeEach(() => aboutComponent = new AboutComponent(titleService));

  it('Should be built with one argument; Title type', () => expect(aboutComponent instanceof AboutComponent).toBeTruthy());

  it('Should have a showArrow with a false value', () => {
    const expectedArrowValue = aboutComponent.showArrow;

    expect(expectedArrowValue).toBeFalsy();
  });

  it('Should have languages array', () => {

    const expectedLanguages: string[] = ['English,', 'Arabic,', 'Russian', '& German.'];

    const actualLanguages = aboutComponent.languages;

    expect(expectedLanguages).toEqual(actualLanguages);

  });

  it('Should have frontEndStacks array', () => {

    const expectedFrontEndStacks: string[] = [
      'HTML5,', 'CSS3 / SCSS,',
      'JavaScript ES6+ / TypeScript',
      '& Angular 8'
    ];

    const actualTechnologyStacks: string[] = aboutComponent.frontEndStacks;

    expect(expectedFrontEndStacks).toEqual(actualTechnologyStacks);

  });

  it('Should have a backEndStack string', () => {

    const expectedBackEndStack: string = 'Node.JS';

    const actualBackendStack: string = aboutComponent.backEndStack;

    expect(expectedBackEndStack).toBe(actualBackendStack);

  });

  it('Should have otherStacks array', () => {

    const expectedOtherStacks: string[] = [
      'Docker,', 'Git/GitHub,', 'Ubuntu,',
      'Windows 10,', 'NPM', '& Visual Studio Code.'
    ];

    const actualOtherStacks: string[] = aboutComponent.otherStacks;

    expect(expectedOtherStacks).toEqual(actualOtherStacks);

  });

  it('Should return my current age', () => {

    const bornYear: number = new Date('January 1, 1995').getFullYear(),
      expectedAge: number = new Date().getFullYear() - bornYear,
      actualAge: number = aboutComponent.age;

    expect(expectedAge).toBe(actualAge);

  });

});
