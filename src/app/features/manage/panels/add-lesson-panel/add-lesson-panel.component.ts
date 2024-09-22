import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';

@Component({
  selector: 'AddLessonPanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './add-lesson-panel.component.html',
  styleUrl: './add-lesson-panel.component.scss',
})
export class AddLessonPanelComponent {
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }
}
