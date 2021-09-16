import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { AboutComponent } from './about.component';

describe('About Component', () => {

  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        FooterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have my current age', () => {
      const bornYear: number = new Date('January 1, 1995').getFullYear();
      const expectedAge: number = new Date().getFullYear() - bornYear;

      expect(component.age).toEqual(expectedAge);
    });

    it('Should have an initial isArrowShown property with the value of false', () => {
      expect(component.isArrowShown).toEqual(false);
    });

    it('Should have languages property', () => {
      const expectedLanguages: string[] = [
        'English,', 'Arabic,',
        'Russian', '& German.'];

      expect(component.languages).toEqual(expectedLanguages);
    });

    it('Should have frontEndStacks property', () => {
      const expectedFrontEndStacks: string[] = [
        'HTML5,', 'CSS3 / SCSS,',
        'JavaScript ES6+ / TypeScript',
        '& Angular 10'];

      expect(component.frontEndStacks).toEqual(expectedFrontEndStacks);
    });

    it('Should have a backEndStack property', () => {
      const expectedBackEndStack = 'Node.JS & Java 8';

      expect(component.backEndStack).toEqual(expectedBackEndStack);
    });

    it('Should have otherStacks property', () => {
      const expectedOtherStacks: string[] = [
        'MongoDB,', 'MongooseJS,', 'Docker,', 'Git/GitHub,', 'Ubuntu,',
        'Windows 10,', 'NPM,', 'IntelliJ IDEA', '& Visual Studio Code'
      ];

      expect(component.otherStacks).toEqual(expectedOtherStacks);
    });
  });

  describe('Methods', () => {
    it('Should set the isArrowShown property', () => {
      component.setIsArrowShown(true);

      expect(component.isArrowShown).toEqual(true);

      component.setIsArrowShown(false);

      expect(component.isArrowShown).toEqual(false);
    });

    it('Should scroll to the top once the button is clicked', () => {
      const scrollSpy: jasmine.Spy = spyOn(window, 'scroll');

      component.scrollToTop();

      expect(scrollSpy).toHaveBeenCalledWith({
        top: 0, left: 0, behavior: 'smooth'
      });
    });
  });

});
