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
