import { BodyComponent } from './body.component';

import { TaskService } from '../services/task.service';

import { Title } from '@angular/platform-browser';

describe('Body Component', () => {

  let bodyComponent: BodyComponent, taskService: TaskService, titleService: Title;

  beforeEach(() => bodyComponent = new BodyComponent(taskService, titleService));

  it('Should exist', () => expect(BodyComponent).toBeDefined());

  it('Should be built with 2 arguments; TaskService and Title type', () => expect(bodyComponent instanceof BodyComponent).toBeTruthy());

});
