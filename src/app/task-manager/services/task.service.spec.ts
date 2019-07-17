import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

import { TaskService } from "./task.service";

import { Task } from '../interface/Task';

import { tasksMock, taskMock } from './mock/mock';

describe('Task Service', () => {

  let taskService: TaskService, httpTestingController: HttpTestingController;

  let mockTasks: Task[], mockTask: Task;

  beforeEach(() => {

    mockTasks = tasksMock;

    mockTask = taskMock;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });

    taskService = TestBed.get(TaskService);

    httpTestingController = TestBed.get(HttpTestingController);

  });

  afterEach(() => { httpTestingController.verify(); });

  it('Should exist', () => { expect(TaskService).toBeDefined(); });

  it('Should be built with 1 argument; HttpClient type', () => {

    let httpClient: HttpClient;

    const taskService = new TaskService(httpClient);

    expect(taskService instanceof TaskService).toBe(true);

  });

  it('Should retrieve tasks via a GET request', () => {

    taskService.getTasksFromBackEnd().subscribe(tasks => {

      const length = tasks.length;

      expect(length).toBe(3);

      expect(tasks).toEqual(mockTasks);

    });

    const request = httpTestingController.expectOne(taskService.url);

    expect(request.request.method).toBe('GET');

    request.flush(mockTasks);

  });

  it('Should add a task via a POST request', () => {

    taskService.addTaskToBackEnd(mockTask).subscribe(task => expect(task).toEqual(mockTask));

    const request = httpTestingController.expectOne(taskService.url);

    expect(request.request.method).toEqual('POST');

    request.flush(mockTask);

  });

  it('Should toggle the completed task via a PUT request', () => {

    const url: string = `${taskService.url}/update/${mockTask.id}`;

    taskService.toggleTaskFromBackEnd(mockTask).subscribe(task => expect(task).toEqual(mockTask));

    const request = httpTestingController.expectOne(url);

    expect(request.request.method).toEqual('PUT');

    request.flush(mockTask);

  });

  it('Should edit a task via a PUT request', () => {

    const url: string = `${taskService.url}/edit/${mockTask.id}`;

    taskService.editTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

    const request = httpTestingController.expectOne(url);

    expect(request.request.method).toEqual('PUT');

    request.flush(mockTask);

  });

  it('Should delete a task via a DELETE request', () => {

    const url: string = `${taskService.url}/delete/${mockTask.id}`;

    taskService.deleteTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

    const request = httpTestingController.expectOne(url);

    expect(request.request.method).toEqual('DELETE');

    request.flush(mockTask);

  });

});
