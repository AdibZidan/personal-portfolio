import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have an initial isVisible property with the value of true', () => {
      expect(component.isVisible).toEqual(true);
    });
  });

  describe('Methods', () => {
    it('Should negate isVisible property via onClick method', () => {
      expect(component.isVisible).toEqual(true);

      component.onClick();

      expect(component.isVisible).toEqual(false);
    });
  });

});
