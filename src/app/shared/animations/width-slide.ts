import { trigger, transition, style, animate } from '@angular/animations';

export const widthSlide = (width: number) =>
  trigger('widthSlide', [
    transition(':enter', [
      style({
        width: 0,
      }),
      animate(
        150,
        style({
          width: `${width}px`,
        })
      ),
    ]),
    transition(':leave', [
      style({
        width: `${width}px`,
      }),
      animate(
        150,
        style({
          width: 0,
        })
      ),
    ]),
  ]);
