import { DialogComponent } from "./dialog.component";

import { MatDialog, MatDialogRef } from '@angular/material';

import { FormComponent } from '../form/form.component';

import { taskMock } from '../services/mock/mock';

describe('Dialog Component', () => {

  let dialogComponent: DialogComponent, matDialog: MatDialog, matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(() => dialogComponent = new DialogComponent(matDialog, matDialogRef));

  it('Should exist', () => expect(dialogComponent).toBeDefined());

  it('Should be built with 2 arguments; MatDialog and MatDialogRef<FormComponent> types', () => expect(dialogComponent instanceof DialogComponent).toBeTruthy());

  it(`Should have a task 'input'`, () => {

    const taskInput = dialogComponent.task = taskMock;

    expect(taskInput).toBe(taskMock);

  });

});
