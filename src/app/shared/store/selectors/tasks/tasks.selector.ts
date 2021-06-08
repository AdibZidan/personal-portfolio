import { createSelector } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';
import { AppState } from '@shared/store/interfaces/app-state.interface';

const initialTasksState = (state: AppState): Task[] => state.tasks;

export const selectNumberOfTasksMessage = () => createSelector(
  initialTasksState,
  (state: Task[]): string => {
    const numberOfTasks: number = state.length;

    if (numberOfTasks === 1) {
      return `There is only ${numberOfTasks} task`;
    } else {
      return `There are ${numberOfTasks} tasks`;
    }
  }
);
