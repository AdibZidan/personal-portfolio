import { Subject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

export const taskServiceSpy = jasmine.createSpyObj(
  'TaskService',
  [
    'getTasksFromBackEnd',
    'addTaskToBackEnd',
    'toggleTaskFromBackEnd',
    'editTaskFromBackEnd',
    'deleteTaskFromBackEnd'
  ]
);

taskServiceSpy.refresher$ = new Subject<Task>();
taskServiceSpy.refresher = taskServiceSpy.refresher$;
