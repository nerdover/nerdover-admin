import { Component, computed, inject, input, signal } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import { Switch } from '../../../../shared/utils/switch';
import { AddSeriesLessonPanelComponent } from '../../panels/add-series-lesson-panel/add-series-lesson-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';
import { ContentClientService } from '../../../../core/services/content-client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddSeriesLessonPanelComponent,
    ManageGroupComponent,
    DatePipe
  ],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.scss',
  animations: [fade],
})
export class SeriesPageComponent {
  private readonly contentClientService = inject(ContentClientService);
  categoryId = input('');
  seriesId = input('');

  currentCategory = computed(() =>
    this.contentClientService.getCategory(this.categoryId())()
  );

  currentSeries = computed(() =>
    this.contentClientService.getSeries(this.categoryId(), this.seriesId())()
  );

  seriesLessons = computed(() =>
    this.contentClientService.seriesLessonIn(
      this.categoryId(),
      this.seriesId()
    )()
  );

  addSeriesLessonPanel = new Switch();
}
