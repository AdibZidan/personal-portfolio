import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { Task } from '@shared/interfaces/task.interface';

export const easeIn: AnimationTriggerMetadata = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const fadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms', style({ opacity: 0 }))
  ])
]);

export const setLineThrough = (task: Task): object => {
  const lineThrough: object = {
    'is-complete': task.isComplete
  };

  return lineThrough;
};
