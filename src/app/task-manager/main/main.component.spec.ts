import { MainComponent } from "./main.component";

import { TaskService } from '../services/task.service';

describe('Main Component', () => {

  let mainComponent: MainComponent, taskService: TaskService;

  beforeEach(() => mainComponent = new MainComponent(taskService));

  it('Should exist', () => expect(mainComponent).toBeDefined());

  it('Should be built with 1 argument; TaskService type', () => expect(mainComponent instanceof MainComponent).toBeTruthy());

});
