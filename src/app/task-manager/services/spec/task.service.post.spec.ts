import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

describe('POST request', () => {

    it('Should add a task via a POST request', () => {

        taskService.addTaskToBackEnd(mockTask).subscribe(task => expect(task).toEqual(mockTask));

        const url: string = taskService.baseUrl;

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toEqual('POST');

        request.flush(mockTask);

    });

});
