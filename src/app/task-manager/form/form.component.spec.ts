import { FormComponent } from "./form.component";

import { FormBuilder } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { Task } from '../interface/Task';

import { taskMock } from './../services/mock/mock';

describe('Form Component', () => {

  let formComponent: FormComponent, formBuilder: FormBuilder, matDialogRef: MatDialogRef<FormComponent>, data: Task;

  beforeEach(() => formComponent = new FormComponent(formBuilder, matDialogRef, data));

  it('Should exist', () => expect(formComponent).toBeDefined());

  it('Should be built with 3 arguments; FormBuilder, MatDialogRef<FormComponent> and Task', () => expect(formComponent instanceof FormComponent).toBeTruthy());

  it(`Should have an 'undefined' task input at the start`, () => {

    const taskInput = formComponent.task;

    expect(taskInput).toBeUndefined();

  });

  it(`Should have a task 'input'`, () => {

    const taskInput = formComponent.task = taskMock;

    expect(taskInput).toBeDefined();

  });

});
