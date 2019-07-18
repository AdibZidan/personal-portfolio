import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

describe('POST request', () => {

    it('Should add a task via a POST request', () => {

        taskService.addTaskToBackEnd(mockTask).subscribe(task => expect(task).toEqual(mockTask));

        const request = httpTestingController.expectOne(taskService.url);

        expect(request.request.method).toEqual('POST');

        request.flush(mockTask);

    });

});
