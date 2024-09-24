import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'DragButton',
  standalone: true,
  imports: [CdkDragHandle],
  templateUrl: './drag-button.component.html',
  styleUrl: './drag-button.component.scss'
})
export class DragButtonComponent {

}
