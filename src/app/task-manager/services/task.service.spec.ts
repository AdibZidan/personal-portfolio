import { TaskService } from './task.service';

import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { tasksMock, taskMock } from './mock/mock';

import { Task } from '../interface/Task';

describe('Mock Service', () => {

    let taskService: TaskService,
        httpMock: HttpTestingController,
        baseUrl: string,
        tasks: Task[],
        task: Task;

    beforeEach(async(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TaskService]
        })));

    beforeEach(() => {

        taskService = TestBed.get(TaskService);

        httpMock = TestBed.get(HttpTestingController);

        baseUrl = taskService.baseUrl;

        tasks = tasksMock;

        task = taskMock;

    });

    afterEach(() => httpMock.verify());

    it('Should be built', () => expect(taskService).toBeTruthy());

    it(`Should have a 'baseUrl'`, () => {

        const expectedBaseUrl: string = 'https://www.adibzidan.com:3000/tasks';

        const actualBaseUrl: string = taskService.baseUrl;

        expect(expectedBaseUrl).toBe(actualBaseUrl);

    });

    it(`Should get the 'refresher' method`, () => {

        const refresher = taskService.refresher;

        expect(refresher).toBeTruthy();

    });

    it('Should retrieve tasks via a GET request', () => {

        taskService
            .getTasksFromBackEnd()
            .subscribe((tasksToGet: Task[]) => {

                const expectedLength: number = 3;

                const actualLength: number = tasksToGet.length;

                expect(expectedLength).toBe(actualLength);

                expect(tasksToGet).toEqual(tasks);

            });

        const request: TestRequest = httpMock.expectOne(baseUrl);

        const method: string = request.request.method;

        expect(method).toBe('GET');

        request.flush(tasks);

    });

    it('Should add tasks via a POST request', () => {

        taskService
            .addTaskToBackEnd(task)
            .subscribe((taskToAdd: Task) =>
                expect(taskToAdd).toBe(task));

        const request: TestRequest = httpMock.expectOne(baseUrl);

        const method: string = request.request.method;

        expect(method).toBe('POST');

        request.flush(task);

    });

    it('Should toggle a task via a PUT request', () => {

        taskService
            .toggleTaskFromBackEnd(task)
            .subscribe((taskToToggle: Task) =>
                expect(taskToToggle).toBe(task));

        const baseUrlPutRequest: string = `${baseUrl}/update/${task.id}`;

        const request: TestRequest = httpMock.expectOne(baseUrlPutRequest);

        const method: string = request.request.method;

        expect(method).toBe('PUT');

        request.flush(task);

    });

    it('Should edit a task via a PUT request', () => {

        taskService
            .editTaskFromBackEnd(task)
            .subscribe((taskToEdit: Task) =>
                expect(taskToEdit).toBe(task));

        const baseUrlPutRequest: string = `${baseUrl}/edit/${task.id}`;

        const request: TestRequest = httpMock.expectOne(baseUrlPutRequest);

        const method: string = request.request.method;

        expect(method).toBe('PUT');

        request.flush(task);

    });

    it('Should delete a task via a DELETE request', () => {

        taskService
            .deleteTaskFromBackEnd(task)
            .subscribe((taskToDelete: Task) =>
                expect(taskToDelete).toBe(task));

        const baseUrlDeleteRequest: string = `${baseUrl}/delete/${task.id}`;

        const request: TestRequest = httpMock.expectOne(baseUrlDeleteRequest);

        const method: string = request.request.method;

        expect(method).toBe('DELETE');

        request.flush(task);

    });

});
