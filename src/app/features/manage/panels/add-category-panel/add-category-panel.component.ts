import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';

@Component({
  selector: 'AddCategoryPanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './add-category-panel.component.html',
  styleUrl: './add-category-panel.component.scss',
})
export class AddCategoryPanelComponent {
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }
}
