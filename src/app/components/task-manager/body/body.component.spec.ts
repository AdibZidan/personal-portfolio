import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { taskMock } from 'src/app/shared/mocks/tasks-mock';
import { Task } from '../../../shared/interfaces/task.interface';
import { TaskService } from '../../../shared/services/task-manager/task.service';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyComponent } from './body.component';

describe('Body Component', () => {

  let bodyComponent: BodyComponent;
  let bodyFixture: ComponentFixture<BodyComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let taskService: TaskService;

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
      providers: [{
        provide: MatDialogRef,
        useValue: undefined
      }]
    }).compileComponents()));

  beforeEach(() => {
    bodyFixture = TestBed.createComponent(BodyComponent);
    bodyComponent = bodyFixture.componentInstance;

    debugElement = bodyFixture.debugElement;
    htmlElement = debugElement.nativeElement;

    taskService = TestBed.inject(TaskService);
  });

  afterEach(() => bodyFixture.destroy());

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

  it(`Should have an defined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = bodyComponent.subscription;

    expect(subscription).toBeDefined();
  });

  it(`Should spy & call 'ngOnDestroy' method`, () => {
    bodyComponent.subscription = new Subscription();

    spyOn(bodyComponent, 'ngOnDestroy').and.callThrough();

    bodyComponent.ngOnDestroy();

    expect(bodyComponent.ngOnDestroy).toHaveBeenCalled();
  });

  it(`Should spy & call 'setLineThrough' method`, () => {
    bodyComponent.task = taskMock;

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

    bodyComponent.onToggleFromBackEnd(taskMock);

    expect(bodyComponent.onToggleFromBackEnd).toHaveBeenCalled();
  });

  it(`Should emit 'deleteTask' with 'onDelete' method`, () => {
    bodyComponent
      .deleteTask
      .subscribe((taskToGetDeleted: Task) =>
        expect(taskToGetDeleted)
          .toBe(taskMock));

    bodyComponent.onDelete(taskMock);
  });

  it(`Should spy & call 'onEdit' method`, () => {
    spyOn(bodyComponent, 'onEdit').and.callThrough();

    bodyComponent.onEdit(taskMock);

    expect(bodyComponent.onEdit).toHaveBeenCalled();
  });

});
