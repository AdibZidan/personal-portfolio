import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { Task } from '../../interfaces/task.interface';
import { taskMock, tasksMock } from '../../mocks/tasks-mock';
import { TaskService } from './task.service';

describe('Task Service', () => {

  let taskService: TaskService;
  let httpTestingController: HttpTestingController;

  let baseUrl: string;
  let tasks: Task[];
  let task: Task;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    })));

  beforeEach(() => {
    taskService = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);

    baseUrl = taskService.baseUrl;
    tasks = tasksMock;
    task = taskMock;
  });

  afterEach(() => httpTestingController.verify());

  it('Should exist/be defined', () =>
    expect(taskService)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(taskService instanceof TaskService)
      .toBeTruthy());

  it(`Should have a 'baseUrl' property`, () => {
    const expectedBaseUrl = 'https://localhost:8000/tasks';
    const actualBaseUrl: string = taskService.baseUrl;

    expect(expectedBaseUrl).toBe(actualBaseUrl);
  });

  it(`Should have the 'refresher' method`, () => {
    const refresher = taskService.refresher;

    expect(refresher).toBeTruthy();
  });

  it(`Should retrieve tasks via a 'GET' request`, () => {
    taskService
      .getTasksFromBackEnd()
      .subscribe((tasksToGet: Task[]) => {
        const expectedLength = 3;
        const actualLength: number = tasksToGet.length;

        expect(expectedLength).toBe(actualLength);
        expect(tasksToGet).toEqual(tasks);
      });

    const request: TestRequest = httpTestingController.expectOne(baseUrl);
    const method: string = request.request.method;

    expect(method).toBe('GET');

    request.flush(tasks);
  });

  it(`Should add tasks via a 'POST' request`, () => {
    taskService
      .addTaskToBackEnd(task)
      .subscribe((taskToAdd: Task) =>
        expect(taskToAdd).toBe(task));

    const request: TestRequest = httpTestingController.expectOne(baseUrl);
    const method: string = request.request.method;

    expect(method).toBe('POST');

    request.flush(task);
  });

  it(`Should toggle a task via a 'PUT' request`, () => {
    taskService
      .toggleTaskFromBackEnd(task)
      .subscribe((taskToToggle: Task) =>
        expect(taskToToggle).toBe(task));

    const baseUrlPutRequest = `${baseUrl}/update/${task.id}`;
    const request: TestRequest = httpTestingController.expectOne(baseUrlPutRequest);
    const method: string = request.request.method;

    expect(method).toBe('PUT');

    request.flush(task);
  });

  it(`Should edit a task via a 'PUT' request`, () => {
    taskService
      .editTaskFromBackEnd(task)
      .subscribe((taskToEdit: Task) =>
        expect(taskToEdit).toBe(task));

    const baseUrlPutRequest = `${baseUrl}/edit/${task.id}`;
    const request: TestRequest = httpTestingController.expectOne(baseUrlPutRequest);
    const method: string = request.request.method;

    expect(method).toBe('PUT');

    request.flush(task);
  });

  it(`Should delete a task via a 'DELETE' request`, () => {
    taskService
      .deleteTaskFromBackEnd(task)
      .subscribe((taskToDelete: Task) =>
        expect(taskToDelete).toBe(task));

    const baseUrlDeleteRequest = `${baseUrl}/delete/${task.id}`;
    const request: TestRequest = httpTestingController.expectOne(baseUrlDeleteRequest);
    const method: string = request.request.method;

    expect(method).toBe('DELETE');

    request.flush(task);
  });

});
