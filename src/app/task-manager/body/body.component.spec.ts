import { BodyComponent } from './body.component';

import { TaskService } from '../services/task.service';

import { Title } from '@angular/platform-browser';

import { taskMock } from '../services/mock/mock';

import { Task } from '../interface/Task';

import { mockTask } from '../services/mock/mock-service.spec';

describe('Body Component', () => {

  let bodyComponent: BodyComponent, taskService: TaskService, titleService: Title;

  beforeEach(() => bodyComponent = new BodyComponent(taskService, titleService));

  it('Should exist', () => expect(BodyComponent).toBeDefined());

  it('Should be built with 2 arguments; TaskService and Title type', () => expect(bodyComponent instanceof BodyComponent).toBeTruthy());

  it(`Should have a task 'input'`, () => {

    const taskInput = bodyComponent.task = taskMock;

    expect(taskInput).toBe(taskMock);

  });

  it(`Should emit 'deleteTask' with 'onDelete' method`, () => {

    const task = bodyComponent.task = taskMock;

    bodyComponent.deleteTask.subscribe((taskToDelete: Task) => expect(taskToDelete).toBe(task));

    bodyComponent.onDelete(task);

  });

  it('Should change the completed property of a task with the onToggleUI method', () => {

    const task = mockTask;

    expect(task.completed).toBeFalsy();

    bodyComponent.onToggleFromUI(task);

    expect(task.completed).toBeTruthy();

  });


});
