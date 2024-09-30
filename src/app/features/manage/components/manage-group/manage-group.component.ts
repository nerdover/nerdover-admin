import { Component, Input } from '@angular/core';
import { Switch } from '../../../../shared/utils/switch';
import { LessonType } from '../../../../core/types/lesson-type';
import { DeletePanelComponent } from '../../panels/delete-panel/delete-panel.component';
import { fade } from '../../../../shared/animations/fade';
import { EditPanelComponent } from '../../panels/edit-panel/edit-panel.component';
import { IdentifiableWithTrace } from '../../../../core/models/lesson';

@Component({
  selector: 'ManageGroup',
  standalone: true,
  imports: [EditPanelComponent, DeletePanelComponent],
  templateUrl: './manage-group.component.html',
  styleUrl: './manage-group.component.scss',
  animations: [fade],
})
export class ManageGroupComponent {
  @Input({ required: true }) manageType!: LessonType;

  @Input() category?: IdentifiableWithTrace;
  @Input() lesson?: IdentifiableWithTrace;
  @Input() series?: IdentifiableWithTrace;
  @Input() seriesLesson?: IdentifiableWithTrace;

  editPanel = new Switch();
  deletePanel = new Switch();
}
