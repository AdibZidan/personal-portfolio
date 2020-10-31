import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {

  let footerComponent: FooterComponent;
  let footerFixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents()));

  beforeEach(() => {
    footerFixture = TestBed.createComponent(FooterComponent);
    footerComponent = footerFixture.componentInstance;
  });

  it('Should create', () => {
    expect(footerComponent).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should return the current year', () => {
      const expectedYear: number = new Date().getFullYear();

      expect(footerComponent.currentYear).toBe(expectedYear);
    });
  });

});
