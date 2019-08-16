import { FormComponent } from './form.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { taskMock } from './../services/mock/mock';

describe('Form Component', () => {

  let formComponent: FormComponent;
  let formFixture: ComponentFixture<FormComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let formBuilder: FormBuilder;
  let formGroup: FormGroup;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
      ],
      declarations: [FormComponent],
      providers: [
        { provide: MatDialogRef },
        { provide: MAT_DIALOG_DATA }
      ]
    }).compileComponents()));

  beforeEach(() => {
    formFixture = TestBed.createComponent(FormComponent);
    formComponent = formFixture.componentInstance;
    debugElement = formFixture.debugElement;
    htmlElement = debugElement.nativeElement;
    formBuilder = TestBed.get(FormBuilder);

    formGroup = formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });
  });

  it('Should exist/be defined', () =>
    expect(formComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(formComponent instanceof FormComponent)
      .toBeTruthy());

  it(`Should have an 'undefined' task input before 'ngOnInit'`, () => {
    const taskInput = formComponent.task;

    expect(taskInput).toBeUndefined();
  });

  it(`Should have a task 'input'`, () => {
    const taskInput = formComponent.task = taskMock;

    expect(taskInput).toBeDefined();
  });

  it(`Should have an invalid 'formGroup' if the user doesn't add the required details`, () => {
    const isValid: boolean = formGroup.valid;

    expect(isValid).toBeFalsy();
  });

  it(`Should have a valid 'formGroup' if the user adds the required details`, () => {
    formGroup.controls.id.setValue(1);
    formGroup.controls.title.setValue('This is the title');
    formGroup.controls.description.setValue('This is the description');
    formGroup.controls.percentage.setValue(100);
    formGroup.controls.completed.setValue(true);

    expect(formGroup.valid).toBeTruthy();
  });

  it(`Should have a falsy 'isValidForm' property before 'onFormBuild' method`, () => {
    const expectedIsValidForm = false;
    const actualIsValidForm: boolean = formComponent.isValidForm;

    expect(expectedIsValidForm).toBe(actualIsValidForm);
  });

  it(`Should have a 'validNumberPattern' property`, () => {
    const expectedValidNumberPattern = '^[1-9][0-9]?$|^100$';
    const actualValidNumberPattern: string = formComponent.validNumberPattern;

    expect(expectedValidNumberPattern).toBe(actualValidNumberPattern);
  });

  it(`Should have a 'errorMessage' property`, () => {
    const expectedErrorMessage = 'Please fill the form above';
    const actualErrorMessage: string = formComponent.errorMessage;

    expect(expectedErrorMessage).toBe(actualErrorMessage);
  });

});
