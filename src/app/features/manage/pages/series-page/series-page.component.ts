import { Component, computed, input, signal } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import {
  getAllSeriesIdentity,
  getAllSeriesLessonIdentity,
} from '../../../../core/mock/mock';
import { Switch } from '../../../../shared/utils/switch';
import { AddSeriesLessonPanelComponent } from '../../panels/add-series-lesson-panel/add-series-lesson-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { DeletePanelComponent } from '../../panels/delete-panel/delete-panel.component';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddSeriesLessonPanelComponent,
    DeletePanelComponent,
  ],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.scss',
  animations: [fade],
})
export class SeriesPageComponent {
  categoryId = input('');
  seriesId = input('');

  currentSeries = computed(() =>
    getAllSeriesIdentity(this.categoryId())?.find(
      (s) => s.id === this.seriesId()
    )
  );
  data = computed(() =>
    getAllSeriesLessonIdentity(this.categoryId(), this.seriesId())
  );

  currentDeleteSeriesLessonId = signal<string | undefined>(undefined);

  addSeriesLessonPanel = new Switch();
  deletePanel = new Switch();

  openDeletePanel(seriesLessonId: string) {
    this.currentDeleteSeriesLessonId.set(seriesLessonId);
    this.deletePanel.open();
  }

  closeDeletePanel() {
    this.currentDeleteSeriesLessonId.set(undefined);
    this.deletePanel.close();
  }
}
