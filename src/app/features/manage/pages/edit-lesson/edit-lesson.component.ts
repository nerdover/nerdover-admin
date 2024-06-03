import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';
import { IUpdateLesson } from '../../../../core/models/lesson';
import { Switch } from '../../../../core/utils/switch';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';
import { UpdateLessonPanelComponent } from '../../components/update-lesson-panel/update-lesson-panel.component';
import { DeleteLessonPanelComponent } from '../../components/delete-lesson-panel/delete-lesson-panel.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-lesson',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MarkdownComponent,
    UpdateLessonPanelComponent,
    DeleteLessonPanelComponent,
    IconComponent,
    NgClass
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
    cover: '',
  };

  updatePanel = new Switch();
  deletePanel = new Switch();
  photosPanel = new Switch();

  coverFile = signal<File | undefined>(undefined);
  coverSrc = computed(() =>
    this.coverFile() ? URL.createObjectURL(this.coverFile()!) : undefined
  );

  isImageDeleted = false;

  ngOnInit(): void {
    this.ls
      .getLesson(this.categoryId()!, this.lessonId()!)
      .subscribe(({ title, content, cover }) => {
        this.currentLesson.title = title;
        this.currentLesson.content = content;
        this.currentLesson.cover = cover;
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

  setDefaultImage(e: Event) {
    const el = e.target as HTMLImageElement;
    el.src = 'images/default-banner.png';
    el.onerror = null;
  }

  inputCoverImage(e: Event) {
    const el = e.target as HTMLInputElement;
    if (!el.files) {
      return;
    }
    this.coverFile.set(el.files[0]);
  }

  clearCoverFile() {
    if (!this.isImageDeleted) {
      this.isImageDeleted = true;
    }
    this.coverFile.set(undefined);
  }
}
