// import { taskService, httpTestingController, mockTask } from '../mock/mock-service.spec';

// import { TestRequest } from '@angular/common/http/testing';

// import { Task } from '../../interface/Task';

// describe('PUT/edit request', () => {

//     it('Should edit a task via a PUT request', () => {

//         const url: string = `${taskService.baseUrl}/edit/${mockTask.id}`;

//         taskService.editTaskFromBackEnd(mockTask).subscribe((taskToBeEdited: Task) => expect(taskToBeEdited).toBe(mockTask));

//         const request: TestRequest = httpTestingController.expectOne(url);

//         const method: string = request.request.method;

//         expect(method).toEqual('PUT');

//         request.flush(mockTask);

//     });

// });
