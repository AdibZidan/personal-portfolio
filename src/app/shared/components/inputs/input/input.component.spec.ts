import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ValidationMessagesComponent } from '@shared/components/validation-messages/validation-messages.component';
import { InputComponent } from './input.component';

describe('InputComponent', () => {

  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
        ValidationMessagesComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
