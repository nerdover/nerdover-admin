import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { DragButtonComponent } from '../drag-button/drag-button.component';
import { EditorService } from '../../../core/services/editor.service';
import { NgClass } from '@angular/common';
import { fade } from '../../animations/fade';
import { widthSlide } from '../../animations/width-slide';

const widthSlide32 = widthSlide(32);

@Component({
  selector: 'DraggableTool',
  standalone: true,
  imports: [CdkDrag, DragButtonComponent, NgClass],
  templateUrl: './draggable-tool.component.html',
  styleUrl: './draggable-tool.component.scss',
  animations: [fade, widthSlide32],
})
export class DraggableToolComponent {
  readonly es = inject(EditorService);
}
