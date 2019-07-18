import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

describe('PUT/edit request', () => {

    it('Should edit a task via a PUT request', () => {

        const url: string = `${taskService.url}/edit/${mockTask.id}`;

        taskService.editTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toEqual('PUT');

        request.flush(mockTask);

    });

});
