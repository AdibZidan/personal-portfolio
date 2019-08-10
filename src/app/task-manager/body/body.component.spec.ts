import { BodyComponent } from './body.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { TaskService } from '../services/task.service';

import { Title } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { DialogComponent } from '../dialog/dialog.component';

import { MatDialogModule, MatDialogRef } from '@angular/material';

import { taskMock } from '../services/mock/mock';

import { Task } from '../interface/Task';

describe('Body Component', () => {

  let bodyComponent: BodyComponent,
    bodyFixture: ComponentFixture<BodyComponent>,
    debugElement: DebugElement,
    htmlElement: HTMLElement,
    taskService: TaskService,
    titleService: Title;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
      declarations: [BodyComponent, DialogComponent,],
      providers: [{ provide: MatDialogRef }]
    }).compileComponents()));

  beforeEach(() => {

    bodyFixture = TestBed.createComponent(BodyComponent);

    bodyComponent = bodyFixture.componentInstance;

    debugElement = bodyFixture.debugElement;

    htmlElement = debugElement.nativeElement;

    taskService = TestBed.get(TaskService);

    titleService = TestBed.get(Title);

  })

  it('Should exist', () => expect(bodyComponent).toBeDefined());

  it('Should be built/compiled', () =>
    expect(bodyComponent instanceof BodyComponent)
      .toBeTruthy());

  it(`Should have a task 'input'`, () => {

    const taskInput = bodyComponent.task = taskMock;

    expect(taskInput).toBe(taskMock);

  });

  it(`Should emit 'deleteTask' with 'onDelete' method`, () => {

    const task = bodyComponent.task = taskMock;

    bodyComponent.deleteTask.subscribe((taskToDelete: Task) => expect(taskToDelete).toBe(task));

    bodyComponent.onDelete(task);

  });

  it(`Should toggle the completed property of a 'task' with the 'onToggleUI' method`, () => {

    const task = taskMock;

    expect(task.completed).toBeFalsy();

    bodyComponent.onToggleFromUI(task);

    expect(task.completed).toBeTruthy();

  });

  it(`Should change the title to 'Task Manager' after 'ngOnInit'`, () => {

    bodyComponent.ngOnInit();

    const expectedTitle: string = 'Task Manager';

    const actualTitle: string = titleService.getTitle();

    expect(expectedTitle).toBe(actualTitle);

  });

});
