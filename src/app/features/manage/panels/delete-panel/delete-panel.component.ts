import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';
import { LessonType } from '../../../../core/types/lesson-type';

const DELETE_CATEGORY_TITLE = 'ต้องการลบหมวดหมู่หรือไม่';
const DELETE_CATEGORY_DESC =
  'หมวดหมู่ที่เลือกจะถูกลบ บทเรียนและชุดบทเรียนทั้งหมดในหมวดหมู่นี้จะหายไป';

const DELETE_LESSON_TITLE = 'ต้องการลบบทเรียนหรือไม่';
const DELETE_LESSON_DESC = 'บทเรียนที่เลือกจะถูกลบ';

const DELETE_SERIES_TITLE = 'ต้องการลบชุดบทเรียนหรือไม่';
const DELETE_SERIES_DESC =
  'ชุดบทเรียนที่เลือกจะถูกลบ เนื้อหาในชุดบทเรียนนี้ทั้งหมดจะหายไป';

const DELETE_SERIES_LESSON_TITLE = 'ต้องการลบเนื้อหาชุดบทเรียนหรือไม่';
const DELETE_SERIES_LESSON_DESC = 'เนื้อหาชุดบทเรียนที่เลือกจะถูกลบ';

@Component({
  selector: 'DeletePanel',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './delete-panel.component.html',
  styleUrl: './delete-panel.component.scss',
})
export class DeletePanelComponent implements OnInit {
  @Input({ required: true }) deleteType!: LessonType;
  @Input() categoryId?: string;
  @Input() lessonId?: string;
  @Input() seriesId?: string;
  @Input() seriesLessonId?: string;

  @Output() closed = new EventEmitter();

  deleteTitle!: string;
  deleteDesc!: string;

  ngOnInit(): void {
    switch (this.deleteType) {
      case 'category':
        this.deleteTitle = DELETE_CATEGORY_TITLE;
        this.deleteDesc = DELETE_CATEGORY_DESC;
        break;
      case 'lesson':
        this.deleteTitle = DELETE_LESSON_TITLE;
        this.deleteDesc = DELETE_LESSON_DESC;
        break;
      case 'series':
        this.deleteTitle = DELETE_SERIES_TITLE;
        this.deleteDesc = DELETE_SERIES_DESC;
        break;
      case 'serieslesson':
        this.deleteTitle = DELETE_SERIES_LESSON_TITLE;
        this.deleteDesc = DELETE_SERIES_LESSON_DESC;
        break;
      default:
        this.deleteTitle = '';
        this.deleteDesc = '';
        break;
    }
  }

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
