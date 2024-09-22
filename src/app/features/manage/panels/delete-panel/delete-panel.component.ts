import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';
import { LessonType } from '../../../../core/types/lesson-type';

@Component({
  selector: 'DeletePanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './delete-panel.component.html',
  styleUrl: './delete-panel.component.scss',
})
export class DeletePanelComponent {
  @Input({ required: true }) deleteType!: LessonType;
  @Input() categoryId?: string;
  @Input() lessonId?: string;
  @Input() seriesId?: string;
  @Input() seriesLessonId?: string;
  @Input() titleMsg: string = '';
  @Input() descMsg: string = '';

  @Output() closed = new EventEmitter();

  deleteFactory() {
    switch (this.deleteType) {
      case 'category':
        return;
      case 'lesson':
        return;
      case 'series':
        return;
      case 'serieslesson':
        return;
      default:
        return;
    }
  }

  close() {
    this.closed.emit();
  }
}
