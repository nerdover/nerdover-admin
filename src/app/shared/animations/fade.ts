import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(100, style({
        opacity: 1
    })),
  ]),
  transition(':leave', [
    style({
      opacity: 1,
    }),
    animate(100, style({
        opacity: 0
    })),
  ]),
]);
