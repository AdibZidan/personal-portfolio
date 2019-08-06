import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

import { TestRequest } from '@angular/common/http/testing';

import { Task } from 'src/app/task-manager/interface/Task';

describe('PUT/toggle request', () => {

    it('Should toggle the completed task via a PUT request', () => {

        const url: string = `${taskService.baseUrl}/update/${mockTask.id}`;

        taskService.toggleTaskFromBackEnd(mockTask).subscribe((taskToBeToggled: Task) => expect(taskToBeToggled).toEqual(mockTask));

        const request: TestRequest = httpTestingController.expectOne(url);

        const method: string = request.request.method;

        expect(method).toEqual('PUT');

        request.flush(mockTask);

    });

});
