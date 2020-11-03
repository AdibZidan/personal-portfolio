import { Task } from '@shared/interfaces/task.interface';
import { Subject } from 'rxjs';

export const taskServiceSpy = jasmine.createSpyObj(
  'TaskService',
  [
    'getTasks$',
    'addTask$',
    'toggleTask$',
    'editTask$',
    'deleteTask$'
  ]
);

taskServiceSpy._refresher$ = new Subject<Task>();
taskServiceSpy.refresher = taskServiceSpy._refresher$;
