import { BodyComponent } from './body.component';

import { TaskService } from '../services/task.service';

describe('Body Component', () => {

  it('Should exist', () => expect(BodyComponent).toBeDefined());

  it('Should be built with 1 argument; TaskService type', () => {

    let taskService: TaskService;

    const bodyComponent = new BodyComponent(taskService);

    expect(bodyComponent instanceof BodyComponent).toBeTruthy();

  });

});
