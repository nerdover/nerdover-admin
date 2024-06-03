import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';
import { IUpdateLesson } from '../../../../core/models/lesson';
import { Switch } from '../../../../core/utils/switch';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';
import { UpdateLessonPanelComponent } from '../../components/update-lesson-panel/update-lesson-panel.component';
import { DeleteLessonPanelComponent } from '../../components/delete-lesson-panel/delete-lesson-panel.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-edit-lesson',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MarkdownComponent,
    UpdateLessonPanelComponent,
    DeleteLessonPanelComponent,
    IconComponent
  ],
  templateUrl: './edit-lesson.component.html',
  styleUrl: './edit-lesson.component.scss',
})
export class EditLessonComponent {
  private readonly ls = inject(LessonService);

  categoryId = input<string>('');
  lessonId = input<string>('');

  availableCategories = this.ls.categories;

  currentLesson: IUpdateLesson = {
    title: '',
    content: '',
  };

  updatePanel = new Switch();
  deletePanel = new Switch();

  ngOnInit(): void {
    this.ls
      .getLesson(this.categoryId()!, this.lessonId()!)
      .subscribe(({ title, content }) => {
        this.currentLesson.title = title;
        this.currentLesson.content = content;
      });
  }

  inputTitle(e: Event) {
    const el = e.target as HTMLHeadingElement;
    this.currentLesson.title = el.textContent || '';
  }

  inputContent(e: Event) {
    const el = e.target as HTMLTextAreaElement;
    this.currentLesson.content = el.textContent || '';
  }
}
