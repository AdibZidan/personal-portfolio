import { Action, createReducer, on } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';
import { addOne, deleteOne, findAll, setIsCompleted, updateOne } from '@shared/store/actions/task/task.actions';
import { incrementId, updateTask } from '@shared/store/helpers/task/task.helper';

const initialTasksState: Task[] = [];

const _tasksReducer = createReducer(
  initialTasksState,
  on(
    findAll, (state: Task[]): Task[] => state
  ),
  on(
    addOne, (state: Task[], action: Task): Task[] =>
    state.concat({
      ...action,
      id: incrementId(state),
      percentage: action.isComplete ? 100 : +action.percentage,
      isComplete: +action.percentage === 100 ? true : action.isComplete
    })
  ),
  on(
    setIsCompleted, (state: Task[], action: Task): Task[] => {
      const tasks: Task[] = state.concat();

      tasks[state.findIndex(
        (task: Task): boolean =>
          task.id === action.id
      )] = {
        ...action,
        percentage: action.isComplete ? 0 : 100,
        isComplete: !action.isComplete
      };

      return tasks;
    }
  ),
  on(
    updateOne, (state: Task[], action: Task): Task[] => {
      const tasks: Task[] = state.concat();

      tasks[state.findIndex(
        (task: Task): boolean =>
          task.id === action.id
      )] = updateTask(action);

      return tasks;
    }
  ),
  on(
    deleteOne, (state: Task[], { id }): Task[] =>
    state.filter((task: Task): boolean =>
      task.id !== id
    )
  )
);

export function tasksReducer(
  state: undefined | Task[],
  action: Action
): Task[] {
  return _tasksReducer(state, action);
}
