import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

describe('DELETE request', () => {

    it('Should delete a task via a DELETE request', () => {

        const url: string = `${taskService.url}/delete/${mockTask.id}`;

        taskService.deleteTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toEqual('DELETE');

        request.flush(mockTask);

    });

});
