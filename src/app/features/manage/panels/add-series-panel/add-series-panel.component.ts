import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';

@Component({
  selector: 'AddSeriesPanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './add-series-panel.component.html',
  styleUrl: './add-series-panel.component.scss'
})
export class AddSeriesPanelComponent {
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }
}
