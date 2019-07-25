import { AboutComponent } from "./about.component";

describe('About Component', () => {

  let aboutComponent: AboutComponent;

  it('Should exist', () => expect(AboutComponent).toBeDefined());

  beforeEach(() => aboutComponent = new AboutComponent());

  it('Should be built with zero arguments', () => expect(aboutComponent instanceof AboutComponent).toBeTruthy());

  it('Should have languages array', () => {

    const expectedLanguages: string[] = ['English,', 'Arabic,', 'Russian', '& German.'];

    const actualLanguages = aboutComponent.languages;

    expect(expectedLanguages).toEqual(actualLanguages);

  });

  it('Should have technologyStacks array', () => {

    const expectedTechnologyStacks: string[] = [
      'HTML5,', 'CSS3,', 'SCSS,',
      'JavaScript ES6+,', 'TypeScript,', 'Angular 8,',
      'Docker,', 'Git/GitHub,', 'Ubuntu,',
      'Node.JS,', 'npm,', '& Visual Studio Code.'
    ];

    const actualTechnologyStacks = aboutComponent.technologyStacks;

    expect(expectedTechnologyStacks).toEqual(actualTechnologyStacks);

  });

});
