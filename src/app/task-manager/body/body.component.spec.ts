import { BodyComponent } from './body.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { taskMock } from '../services/mock/mock';
import { Task } from '../interface/Task';

describe('Body Component', () => {

  let bodyComponent: BodyComponent;
  let bodyFixture: ComponentFixture<BodyComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let taskService: TaskService;
  let titleService: Title;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [
        BodyComponent,
        DialogComponent
      ],
      providers: [{ provide: MatDialogRef }]
    }).compileComponents()));

  beforeEach(() => {
    bodyFixture = TestBed.createComponent(BodyComponent);
    bodyComponent = bodyFixture.componentInstance;

    debugElement = bodyFixture.debugElement;
    htmlElement = debugElement.nativeElement;

    taskService = TestBed.get(TaskService);
    titleService = TestBed.get(Title);
  });

  it('Should exist', () =>
    expect(bodyComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(bodyComponent instanceof BodyComponent)
      .toBeTruthy());

  it(`Should have a task 'input'`, () => {
    const taskInput = bodyComponent.task = taskMock;

    expect(taskInput).toBe(taskMock);
  });

  it(`Should have a defined 'deleteTask' 'output'`, () => {
    const deleteTaskOutput = bodyComponent.deleteTask;

    expect(deleteTaskOutput).toBeDefined();
  });

  it(`Should have an undefined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = bodyComponent.subscription;

    expect(subscription).toBeUndefined();
  });

  it(`Should spy & call 'ngOnDestroy' method`, () => {
    bodyComponent.subscription = new Subscription();

    spyOn(bodyComponent, 'ngOnDestroy').and.callThrough();

    bodyComponent.ngOnDestroy();

    expect(bodyComponent.ngOnDestroy).toHaveBeenCalled();
  });

  it(`Should spy & call 'setLineThrough' method`, () => {
    spyOn(bodyComponent, 'setLineThrough').and.callThrough();

    bodyComponent.setLineThrough();

    expect(bodyComponent.setLineThrough).toHaveBeenCalled();
  });

  it(`Should toggle the completed property of a 'task' with the 'onToggleFromUI' method`, () => {
    const task = taskMock;

    expect(task.completed).toBe(false);

    bodyComponent.onToggleFromUI(task);

    expect(task.completed).toBe(true);
  });

  it(`Should spy & call 'onToggleFromBackEnd' method`, () => {
    spyOn(bodyComponent, 'onToggleFromBackEnd').and.callThrough();

    bodyComponent.onToggleFromBackEnd(null);

    expect(bodyComponent.onToggleFromBackEnd).toHaveBeenCalled();
  });

  it(`Should emit 'deleteTask' with 'onDelete' method`, () => {
    const task = bodyComponent.task = taskMock;

    bodyComponent
      .deleteTask
      .subscribe((taskToGetDeleted: Task) =>
        expect(taskToGetDeleted)
          .toBe(task));

    bodyComponent.onDelete(task);
  });

  it(`Should change the title to 'Task Manager' after 'ngOnInit'`, () => {
    bodyComponent.ngOnInit();

    const expectedTitle = 'Task Manager';
    const actualTitle: string = titleService.getTitle();

    expect(expectedTitle).toBe(actualTitle);
  });

});
