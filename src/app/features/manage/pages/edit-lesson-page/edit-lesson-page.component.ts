import { Component, input } from '@angular/core';
import { EditorComponent } from '../../components/editor/editor.component';

@Component({
  selector: 'app-edit-lesson-page',
  standalone: true,
  imports: [EditorComponent],
  templateUrl: './edit-lesson-page.component.html',
  styleUrl: './edit-lesson-page.component.scss'
})
export class EditLessonPageComponent {
  categoryId = input('');
  lessonId = input('');
}
