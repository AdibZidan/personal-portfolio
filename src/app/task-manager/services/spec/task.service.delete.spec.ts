import { taskService, httpTestingController, mockTask } from '../mock/mock-service';

describe('DELETE request', () => {

    it('Should delete a task via a DELETE request', () => {

        const url: string = `${taskService.url}/delete/${mockTask.id}`;

        taskService.deleteTaskFromBackEnd(mockTask).subscribe(task => expect(task).toBe(mockTask));

        const request = httpTestingController.expectOne(url);

        expect(request.request.method).toEqual('DELETE');

        request.flush(mockTask);

    });

});
