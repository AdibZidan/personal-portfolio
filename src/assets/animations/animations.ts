import { trigger, transition, style, animate } from '@angular/animations';

import { Task } from './../../app/task-manager/interface/Task';

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

export const setLine = (task: Task): object => {
  const lineThrough: object = { 'is-complete': task.completed };

  return lineThrough;
};