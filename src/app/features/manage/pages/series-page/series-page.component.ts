import { Component, computed, input, signal } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import {
  getAllCategoryIdentity,
  getAllSeriesIdentity,
  getAllSeriesLessonIdentity,
} from '../../../../core/mock/mock';
import { Switch } from '../../../../shared/utils/switch';
import { AddSeriesLessonPanelComponent } from '../../panels/add-series-lesson-panel/add-series-lesson-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddSeriesLessonPanelComponent,
    ManageGroupComponent,
  ],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.scss',
  animations: [fade],
})
export class SeriesPageComponent {
  categoryId = input('');
  seriesId = input('');

  currentCategory = computed(() =>
    getAllCategoryIdentity().find((c) => c.id === this.categoryId())
  );

  currentSeries = computed(() =>
    getAllSeriesIdentity(this.categoryId())?.find(
      (s) => s.id === this.seriesId()
    )
  );
  data = computed(() =>
    getAllSeriesLessonIdentity(this.categoryId(), this.seriesId())
  );

  addSeriesLessonPanel = new Switch();
}
