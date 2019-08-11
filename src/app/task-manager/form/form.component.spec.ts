import { FormComponent } from "./form.component";

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, FormGroupDirective } from '@angular/forms';

import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

import { Task } from '../interface/Task';

import { taskMock } from './../services/mock/mock';

describe('Form Component', () => {

  let formComponent: FormComponent,
    formFixture: ComponentFixture<FormComponent>,
    debugElement: DebugElement,
    htmlElement: HTMLElement,
    formBuilder: FormBuilder,
    matDialogRef: MatDialogRef<FormComponent>,
    data: Task;


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

  });

  it('Should exist', () => expect(formComponent).toBeDefined());

  it('Should be built/compiled', () =>
    expect(formComponent instanceof FormComponent)
      .toBeTruthy());

  it(`Should have an 'undefined' task input at the start`, () => {

    const taskInput = formComponent.task;

    expect(taskInput).toBeUndefined();

  });

  it(`Should have a task 'input'`, () => {

    const taskInput = formComponent.task = taskMock;

    expect(taskInput).toBeDefined();

  });

});
