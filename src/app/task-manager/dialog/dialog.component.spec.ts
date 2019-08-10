import { DialogComponent } from "./dialog.component";

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';

import { FormComponent } from '../form/form.component';

import { taskMock } from '../services/mock/mock';

describe('Dialog Component', () => {

  let dialogComponent: DialogComponent,
    dialogFixture: ComponentFixture<DialogComponent>,
    debugElement: DebugElement,
    htmlElement: HTMLElement,
    matDialog: MatDialog,
    matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [{ provide: MatDialog }, { provide: MatDialogRef }]
    }).compileComponents()));

  beforeEach(() => {

    dialogFixture = TestBed.createComponent(DialogComponent);

    dialogComponent = dialogFixture.componentInstance;

    debugElement = dialogFixture.debugElement;

    htmlElement = debugElement.nativeElement;

  });

  it('Should exist', () => expect(dialogComponent).toBeDefined());

  it('Should be built/compiled', () =>
    expect(dialogComponent instanceof DialogComponent)
      .toBeTruthy());

  it(`Should have a task 'input'`, () => {

    const taskInput = dialogComponent.task = taskMock;

    expect(taskInput).toBe(taskMock);

  });

});
