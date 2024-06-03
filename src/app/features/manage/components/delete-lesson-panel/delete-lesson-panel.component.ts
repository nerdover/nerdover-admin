import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';

@Component({
  selector: 'DeleteLessonPanel',
  standalone: true,
  imports: [],
  templateUrl: './delete-lesson-panel.component.html',
  styleUrl: './delete-lesson-panel.component.scss'
})
export class DeleteLessonPanelComponent {
  private readonly ls = inject(LessonService);
  private readonly router = inject(Router);

  categoryId = input<string>('');
  lessonId = input<string>('');
  close = output();

  cancel() {
    this.close.emit();
  }

  delete() {
    this.ls.deleteLesson(this.categoryId(), this.lessonId()).subscribe(() => {
      this.router.navigate(['/manage', 'u', this.categoryId()]);
    });
  }
}
