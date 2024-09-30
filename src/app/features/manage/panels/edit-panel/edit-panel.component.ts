import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LessonType } from '../../../../core/types/lesson-type';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';
import { FormsModule } from '@angular/forms';
import { IdentifiableWithTrace } from '../../../../core/models/lesson';

@Component({
  selector: 'EditPanel',
  standalone: true,
  imports: [OverlayComponent, FormsModule],
  templateUrl: './edit-panel.component.html',
  styleUrl: './edit-panel.component.scss',
})
export class EditPanelComponent implements OnInit {
  @Input({ required: true }) editType!: LessonType;
  @Input() category?: IdentifiableWithTrace;
  @Input() lesson?: IdentifiableWithTrace;
  @Input() series?: IdentifiableWithTrace;
  @Input() seriesLesson?: IdentifiableWithTrace;

  @Output() closed = new EventEmitter();

  newCategoryTitle?: string;
  newLessonTitle?: string;
  newSeriesTitle?: string;
  newSeriesLessonTitle?: string;
  
  ngOnInit(): void {
    this.newCategoryTitle = this.category?.title;
    this.newLessonTitle = this.lesson?.title;
    this.newSeriesTitle = this.series?.title;
    this.newSeriesLessonTitle = this.seriesLesson?.title;
  }

  editFactory() {
    switch (this.editType) {
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
