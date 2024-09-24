import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ToolMenuComponent } from '../tool-menu/tool-menu.component';
import { DragButtonComponent } from '../drag-button/drag-button.component';

@Component({
  selector: 'DraggableTool',
  standalone: true,
  imports: [CdkDrag, ToolMenuComponent, DragButtonComponent],
  templateUrl: './draggable-tool.component.html',
  styleUrl: './draggable-tool.component.scss',
})
export class DraggableToolComponent {}
