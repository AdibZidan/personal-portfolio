// import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

// import { TestRequest } from '@angular/common/http/testing';

// import { Task } from '../../interface/Task';

// describe('DELETE request', () => {

//     it('Should delete a task via a DELETE request', () => {

//         const url: string = `${taskService.baseUrl}/delete/${mockTask.id}`;

//         taskService.deleteTaskFromBackEnd(mockTask).subscribe((taskToBeDeleted: Task) => expect(taskToBeDeleted).toBe(mockTask));

//         const request: TestRequest = httpTestingController.expectOne(url);

//         const method: string = request.request.method;

//         expect(method).toEqual('DELETE');

//         request.flush(mockTask);

//     });

// });
