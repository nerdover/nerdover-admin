import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';

@Component({
  selector: 'AddSeriesLessonPanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './add-series-lesson-panel.component.html',
  styleUrl: './add-series-lesson-panel.component.scss'
})
export class AddSeriesLessonPanelComponent {
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }
}
