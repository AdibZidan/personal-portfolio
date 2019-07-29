import { taskService, mockTasks, httpTestingController } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

describe('GET request', () => {

    it('Should retrieve tasks via a GET request', () => {

        taskService.getTasksFromBackEnd().subscribe(tasks => {

            const length: number = tasks.length;

            expect(length).toBe(3);

            expect(tasks).toEqual(mockTasks);

        });

        const url: string = taskService.baseUrl;

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toBe('GET');

        request.flush(mockTasks);

    });

});