import { Component, input } from '@angular/core';

@Component({
  selector: 'app-edit-series-lesson-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-series-lesson-page.component.html',
  styleUrl: './edit-series-lesson-page.component.scss'
})
export class EditSeriesLessonPageComponent {
  categoryId = input('');
  seriesId = input('');
  seriesLessonId = input('');
}
