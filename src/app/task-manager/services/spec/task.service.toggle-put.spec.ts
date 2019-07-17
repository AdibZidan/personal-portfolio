import { taskService, httpTestingController, mockTask } from '../mock/mock-service';

describe('PUT/toggle request', () => {

    it('Should toggle the completed task via a PUT request', () => {

        const url: string = `${taskService.url}/update/${mockTask.id}`;

        taskService.toggleTaskFromBackEnd(mockTask).subscribe(task => expect(task).toEqual(mockTask));

        const request = httpTestingController.expectOne(url);

        expect(request.request.method).toEqual('PUT');

        request.flush(mockTask);

    });

});
