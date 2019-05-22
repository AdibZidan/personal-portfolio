import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputComponent } from './add-input.component';

describe('AddComponent', () => {
  let component: AddInputComponent;
  let fixture: ComponentFixture<AddInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
