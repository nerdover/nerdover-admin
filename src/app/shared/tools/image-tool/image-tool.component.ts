import { Component } from '@angular/core';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { ToggleIconButtonComponent } from '../../components/toggle-icon-button/toggle-icon-button.component';
import { ImageConfig, ImageData, ImageTool } from '../../../core/models/image-tool';
import { Switch } from '../../utils/switch';

@Component({
  selector: 'app-image-tool',
  standalone: true,
  imports: [DraggableToolComponent, ToggleIconButtonComponent],
  templateUrl: './image-tool.component.html',
  styleUrl: './image-tool.component.scss'
})
export class ImageToolComponent implements ImageTool {
  id!: string;

  data!: ImageData;
  config!: ImageConfig;

  tunePanel = new Switch(true);
}
