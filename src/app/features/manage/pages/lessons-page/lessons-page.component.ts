import { Component, computed, input } from '@angular/core';
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
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddLessonPanelComponent,
    AddSeriesPanelComponent,
    ManageGroupComponent,
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

  addLessonPanel = new Switch();
  addSeriesPanel = new Switch();
}
