import { Component, inject, input, output } from '@angular/core';
import { IUpdateLesson } from '../../../../core/models/lesson';
import { LessonService } from '../../../../core/services/lesson.service';

@Component({
  selector: 'UpdateLessonPanel',
  standalone: true,
  imports: [],
  templateUrl: './update-lesson-panel.component.html',
  styleUrl: './update-lesson-panel.component.scss'
})
export class UpdateLessonPanelComponent {
  private readonly ls = inject(LessonService);

  lesson = input<IUpdateLesson>({
    title: '',
    content: '',
  });
  categoryId = input<string>('');
  lessonId = input<string>('');
  close = output();

  cancel() {
    this.close.emit();
  }

  update() {
    this.ls
      .updateLesson(this.categoryId(), this.lessonId(), this.lesson())
      .subscribe(() => {
        this.close.emit();
      });
  }
}
