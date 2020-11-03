import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Task } from '../../interfaces/task.interface';
import { taskMock, tasksMock } from '../../mocks/tasks-mock';
import { TaskService } from './task.service';

describe('Task Service', () => {

  let taskService: TaskService;
  let httpTestingController: HttpTestingController;

  let baseUrl: string;
  let tasks: Task[];
  let task: Task;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    taskService = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);

    baseUrl = taskService.baseUrl;
    tasks = tasksMock;
    task = taskMock;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should create', () => {
    expect(taskService).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have a defined baseUrl property', () => {
      expect(taskService.baseUrl).toEqual('http://localhost:3000/tasks');
    });

    it('Should have a defined refresher getter property', () => {
      expect(taskService.refresher).toEqual(new Subject<Task>());
    });
  });

  describe('Methods', () => {
    it('Should retrieve tasks via a GET request', () => {
      taskService
        .getTasksFromBackEnd()
        .subscribe((tasksToGet: Task[]) => {
          const expectedLength = 3;
          const actualLength: number = tasksToGet.length;

          expect(expectedLength).toEqual(actualLength);
          expect(tasksToGet).toEqual(tasks);
        });

      const request: TestRequest = httpTestingController.expectOne(baseUrl);
      const method: string = request.request.method;

      expect(method).toBe('GET');

      request.flush(tasks);
    });

    it('Should add tasks via a POST request', () => {
      taskService
        .addTaskToBackEnd(task)
        .subscribe((taskToAdd: Task) =>
          expect(taskToAdd).toBe(task));

      const request: TestRequest = httpTestingController.expectOne(baseUrl);
      const method: string = request.request.method;

      expect(method).toEqual('POST');

      request.flush(task);
    });

    it('Should toggle a task via a PUT request', () => {
      taskService
        .toggleTaskFromBackEnd(task)
        .subscribe((taskToToggle: Task) =>
          expect(taskToToggle).toBe(task));

      const baseUrlPutRequest = `${baseUrl}/update/${task.id}`;
      const request: TestRequest = httpTestingController.expectOne(baseUrlPutRequest);
      const method: string = request.request.method;

      expect(method).toEqual('PUT');

      request.flush(task);
    });

    it('Should edit a task via a PUT request', () => {
      taskService
        .editTaskFromBackEnd(task)
        .subscribe((taskToEdit: Task) =>
          expect(taskToEdit).toBe(task));

      const baseUrlPutRequest = `${baseUrl}/edit/${task.id}`;
      const request: TestRequest = httpTestingController.expectOne(baseUrlPutRequest);
      const method: string = request.request.method;

      expect(method).toEqual('PUT');

      request.flush(task);
    });

    it('Should delete a task via a DELETE request', () => {
      taskService
        .deleteTaskFromBackEnd(task)
        .subscribe((taskToDelete: Task) =>
          expect(taskToDelete).toBe(task));

      const baseUrlDeleteRequest = `${baseUrl}/delete/${task.id}`;
      const request: TestRequest = httpTestingController.expectOne(baseUrlDeleteRequest);
      const method: string = request.request.method;

      expect(method).toEqual('DELETE');

      request.flush(task);
    });
  });

});
