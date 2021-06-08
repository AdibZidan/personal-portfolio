import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

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
