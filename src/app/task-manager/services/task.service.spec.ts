import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

import { TaskService } from "./task.service";

import { Task } from '../interface/Task';

describe('Task Service', () => {

  let taskService: TaskService, httpTestingController: HttpTestingController;

  beforeEach(() => {

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

    const mockTasks: Task[] = [{
      id: 1,
      title: 'This is a test!',
      description: 'I love testing!',
      percentage: 69,
      completed: false
    },
    {
      id: 2,
      title: 'Wake up at 6 A.M',
      description: 'Drink lots water and prepare coffee',
      percentage: 10,
      completed: false
    }, {
      id: 3,
      title: 'This is a another test!',
      description: 'I love testing! --- This message was marked as spam!',
      percentage: 100,
      completed: true
    }];

    taskService.getTasksFromBackEnd().subscribe(tasks => {

      const length = tasks.length;

      expect(length).toBe(3);

      expect(tasks).toEqual(mockTasks);

    });

    const request = httpTestingController.expectOne(taskService.url);

    expect(request.request.method).toBe('GET');

    request.flush(mockTasks);

  });

});
