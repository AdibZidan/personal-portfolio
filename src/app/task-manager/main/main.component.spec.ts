import { MainComponent } from "./main.component";

import { TaskService } from '../services/task.service';

describe('Main Component', () => {

  it('Should exist', () => { expect(MainComponent).toBeDefined(); });

  it('Should be built with 1 argument; TaskService type', () => {

    let taskService: TaskService;

    const mainComponent = new MainComponent(taskService);

    expect(mainComponent instanceof MainComponent).toBe(true);

  });

});
