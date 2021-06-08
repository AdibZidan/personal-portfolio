import { createAction, props } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';

export const findAll = createAction(
  'Find All Tasks'
);

export const addOne = createAction(
  'Add One Task',
  props<Task>()
);

export const setIsCompleted = createAction(
  'Set Is Task Completed',
  props<Task>()
);

export const updateOne = createAction(
  'Update One Task',
  props<Task>()
);

export const deleteOne = createAction(
  'Delete One Task',
  props<{ id: number; }>()
);
