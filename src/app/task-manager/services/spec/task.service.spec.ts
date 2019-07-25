import { HttpClient } from '@angular/common/http';

import { TaskService } from "../task.service";

describe('Task Service', () => {

  it('Should exist', () => expect(TaskService).toBeDefined());

  it('Should be built with 1 argument; HttpClient type', () => {

    let httpClient: HttpClient;

    const taskService: TaskService = new TaskService(httpClient);

    expect(taskService instanceof TaskService).toBeTruthy();

  });

});
