import { taskService, mockTasks, httpTestingController } from '../mock/mock-service.spec';

describe('GET request', () => {

    it('Should retrieve tasks via a GET request', () => {

        taskService.getTasksFromBackEnd().subscribe(tasks => {

            const length = tasks.length;

            expect(length).toBe(3);

            expect(tasks).toEqual(mockTasks);

        });

        const request = httpTestingController.expectOne(taskService.url);

        expect(request.request.method).toBe('GET');

        request.flush(mockTasks);

    });

});