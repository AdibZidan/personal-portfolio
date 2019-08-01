import { BodyComponent } from './body.component';

import { TaskService } from '../services/task.service';

import { Title } from '@angular/platform-browser';

describe('Body Component', () => {

  it('Should exist', () => expect(BodyComponent).toBeDefined());

  it('Should be built with 2 arguments; TaskService and Title type', () => {

    let taskService: TaskService, titleService: Title;

    const bodyComponent = new BodyComponent(taskService, titleService);

    expect(bodyComponent instanceof BodyComponent).toBeTruthy();

  });

});
