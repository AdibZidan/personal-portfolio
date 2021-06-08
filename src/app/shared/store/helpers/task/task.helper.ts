import { Task } from '@shared/interfaces/task.interface';

export function incrementId(state: Task[]): number {
  return Math.max(...state.map((task: Task): number => task.id ? task.id : 0), 0) + 1;
}

export function updateTask(action: Task): Task {
  if (action.isComplete) {
    return {
      ...action,
      percentage: 100
    };
  }

  if (!action.isComplete && action.percentage !== 100) {
    return {
      ...action,
      percentage: action.percentage
    };
  }

  if (action.percentage === 100) {
    return {
      ...action,
      isComplete: true
    };
  }

  return action;
}
