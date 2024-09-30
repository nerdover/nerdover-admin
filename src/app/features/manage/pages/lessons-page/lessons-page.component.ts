import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FileButtonComponent } from '../../components/file-button/file-button.component';
import { Switch } from '../../../../shared/utils/switch';
import { AddLessonPanelComponent } from '../../panels/add-lesson-panel/add-lesson-panel.component';
import { AddSeriesPanelComponent } from '../../panels/add-series-panel/add-series-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { ManageGroupComponent } from '../../components/manage-group/manage-group.component';
import { ContentClientService } from '../../../../core/services/content-client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [
    FileButtonComponent,
    AddLessonPanelComponent,
    AddSeriesPanelComponent,
    ManageGroupComponent,
    DatePipe
  ],
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.scss',
  animations: [fade],
})
export class LessonsPageComponent {
  private readonly contentClientService = inject(ContentClientService);
  categoryId = input('');

  currentCategory = computed(() =>
    this.contentClientService.getCategory(this.categoryId())()
  );

  lessons = computed(() =>
    this.contentClientService.lessonsIn(this.categoryId())()
  );

  series = computed(() =>
    this.contentClientService.seriesIn(this.categoryId())()
  );

  addLessonPanel = new Switch();
  addSeriesPanel = new Switch();
}
