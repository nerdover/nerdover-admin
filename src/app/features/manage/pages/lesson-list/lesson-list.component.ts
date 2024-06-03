import { Component, inject, input } from '@angular/core';
import { LessonService } from '../../../../core/services/lesson.service';
import { Switch } from '../../../../core/utils/switch';
import { ILesson } from '../../../../core/models/lesson';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CreateLessonPanelComponent } from '../../components/create-lesson-panel/create-lesson-panel.component';
import { DeleteCategoryPanelComponent } from '../../components/delete-category-panel/delete-category-panel.component';
import { UpdateCategoryPanelComponent } from '../../components/update-category-panel/update-category-panel.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    CreateLessonPanelComponent,
    DeleteCategoryPanelComponent,
    UpdateCategoryPanelComponent,
    IconComponent
  ],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent {
  ls = inject(LessonService);

  categoryId = input('');

  createPanel = new Switch();
  updatePanel = new Switch();
  deletePanel = new Switch();
  menuPanel = new Switch();

  ngOnInit(): void {
    this.ls.currentCategoryId.set(this.categoryId());
  }

  addToLessons(lesson: ILesson) {
    // this.lessons()?.push(lesson);
  }

  setDefaultImage(e: Event) {
    const el = e.target as HTMLImageElement;
    el.src = 'images/default-banner.png';
    el.onerror = null;
  }
}
