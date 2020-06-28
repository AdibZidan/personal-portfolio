import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskMock } from '../../../shared/mocks/tasks-mock';
import { FormComponent } from './form.component';

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
        {
          provide: MatDialogRef,
          useValue: undefined
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: undefined
        }
      ]
    }).compileComponents()));

  beforeEach(() => {
    formFixture = TestBed.createComponent(FormComponent);
    formComponent = formFixture.componentInstance;

    debugElement = formFixture.debugElement;
    htmlElement = debugElement.nativeElement;

    formBuilder = TestBed.inject(FormBuilder);

    formGroup = formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });
  });

  afterEach(() => formFixture.destroy());

  it('Should exist/be defined', () =>
    expect(formComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(formComponent instanceof FormComponent)
      .toBeTruthy());

  it(`Should have an undefined 'task input' before 'ngOnInit'`, () => {
    const taskInput = formComponent.task;

    expect(taskInput).toBeUndefined();
  });

  it(`Should have a defined task 'input'`, () => {
    const taskInput = formComponent.task = taskMock;

    expect(taskInput).toBeDefined();
  });

  it(`Should have an undefined 'formGroup' before 'ngOnInit'`, () => {
    const undefinedFormGroup = formComponent.formGroup;

    expect(undefinedFormGroup).toBeUndefined();
  });

  it(`Should have an invalid 'formGroup' at the start`, () => {
    const isValid: boolean = formGroup.valid;

    expect(isValid).toBe(false);
  });

  it(`Should have a valid 'formGroup' if the user adds the required details`, () => {
    formGroup.controls.id.setValue(1);
    formGroup.controls.title.setValue('This is the title');
    formGroup.controls.description.setValue('This is the description');
    formGroup.controls.percentage.setValue(100);
    formGroup.controls.completed.setValue(true);

    expect(formGroup.valid).toBe(true);
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

  it(`Should have an 'errorMessage' property`, () => {
    const expectedErrorMessage = 'Please fill the form above';
    const actualErrorMessage: string = formComponent.errorMessage;

    expect(expectedErrorMessage).toBe(actualErrorMessage);
  });

  it(`Should have a defined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = formComponent.subscription;

    expect(subscription).toBeDefined();
  });

  it(`Should spy & call 'ngOnDestroy' method`, () => {
    spyOn(formComponent, 'ngOnDestroy').and.callThrough();

    formComponent.ngOnDestroy();

    expect(formComponent.ngOnDestroy).toHaveBeenCalled();
  });

});
