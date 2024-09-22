import { Component, computed, input, signal } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import {
  getAllCategoryIdentity,
  getAllLessonIdentity,
  getAllSeriesIdentity,
} from '../../../../core/mock/mock';
import { Switch } from '../../../../shared/utils/switch';
import { AddLessonPanelComponent } from '../../panels/add-lesson-panel/add-lesson-panel.component';
import { AddSeriesPanelComponent } from '../../panels/add-series-panel/add-series-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { DeletePanelComponent } from '../../panels/delete-panel/delete-panel.component';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddLessonPanelComponent,
    AddSeriesPanelComponent,
    DeletePanelComponent
  ],
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.scss',
  animations: [fade],
})
export class LessonsPageComponent {
  categoryId = input('');

  currentCategory = computed(() =>
    getAllCategoryIdentity().find((c) => c.id === this.categoryId())
  );
  data = computed(() => getAllLessonIdentity(this.categoryId()));
  data1 = computed(() => getAllSeriesIdentity(this.categoryId()));

  currentDeleteLessonId = signal<string | undefined>(undefined);
  currentDeleteSeriesId = signal<string | undefined>(undefined);

  addLessonPanel = new Switch();
  addSeriesPanel = new Switch();

  deleteLessonPanel = new Switch();
  deleteSeriesPanel = new Switch();

  openDeleteLessonPanel(lessonId: string) {
    this.currentDeleteLessonId.set(lessonId);
    this.deleteLessonPanel.open();
  }

  closeDeleteLessonPanel() {
    this.currentDeleteLessonId.set(undefined);
    this.deleteLessonPanel.close();
  }

  openDeleteSeriesPanel(seriesId: string) {
    this.currentDeleteSeriesId.set(seriesId);
    this.deleteSeriesPanel.open();
  }

  closeDeleteSeriesPanel() {
    this.currentDeleteSeriesId.set(undefined);
    this.deleteSeriesPanel.close();
  }
}
