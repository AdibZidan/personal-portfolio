import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

import { Task } from '../../interface/Task';

describe('POST request', () => {

    it('Should add a task via a POST request', () => {

        taskService.addTaskToBackEnd(mockTask).subscribe((taskToBeAdded: Task) => expect(taskToBeAdded).toEqual(mockTask));

        const url: string = taskService.baseUrl;

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toEqual('POST');

        request.flush(mockTask);

    });

});
