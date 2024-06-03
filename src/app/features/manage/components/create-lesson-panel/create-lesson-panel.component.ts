import { Component, inject, output } from '@angular/core';
import { LessonService } from '../../../../core/services/lesson.service';
import { ICreateLesson, ILesson } from '../../../../core/models/lesson';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'CreateLessonPanel',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './create-lesson-panel.component.html',
  styleUrl: './create-lesson-panel.component.scss',
})
export class CreateLessonPanelComponent {
  private readonly ls = inject(LessonService);

  availableCategories = this.ls.categories;
  lesson: ICreateLesson = { id: '', title: '', categoryId: '' };

  created = output<ILesson>();
  close = output();

  create() {
    if (!this.validateLesson()) {
      return;
    }
    this.ls.createLesson(this.lesson).subscribe((createdLesson) => {
      this.created.emit(createdLesson);
      this.close.emit();
    });
  }

  cancel() {
    this.close.emit();
  }

  validateLesson() {
    return this.lesson.id && this.lesson.title && this.lesson.categoryId;
  }
}
