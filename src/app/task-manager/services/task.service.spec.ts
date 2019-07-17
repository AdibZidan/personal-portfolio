import { TaskService } from "./task.service";

import { HttpClient } from '@angular/common/http';

describe('Task Service', () => {

  it('Should exist', () => { expect(TaskService).toBeDefined(); });

  it('Should be built with 1 argument; HttpClient type', () => {

    let httpClient: HttpClient;

    const taskService = new TaskService(httpClient);

    expect(taskService instanceof TaskService).toBe(true);

  });

});
