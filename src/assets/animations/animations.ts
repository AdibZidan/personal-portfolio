import { animate, style, transition, trigger } from '@angular/animations';
import { Task } from '@shared/interfaces/task.interface';

export const easeIn = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const setLineThrough = (task: Task): object => {
  const lineThrough: object = {
    'is-complete': task.isComplete
  };

  return lineThrough;
};
