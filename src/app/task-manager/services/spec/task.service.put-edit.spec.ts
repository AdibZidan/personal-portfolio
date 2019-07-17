import { taskService, httpTestingController, mockTask } from '../mock/mock-service';

describe('PUT/edit request', () => {

    it('Should edit a task via a PUT request', () => {

        const url: string = `${taskService.url}/edit/${mockTask.id}`;

        taskService.editTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

        const request = httpTestingController.expectOne(url);

        expect(request.request.method).toEqual('PUT');

        request.flush(mockTask);

    });

});
