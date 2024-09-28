import { Component, inject } from '@angular/core';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { ImageConfig, ImageData, ImageTool } from '../../../core/models/image-tool';
import { Switch } from '../../utils/switch';
import { EditorService } from '../../../core/services/editor.service';

@Component({
  selector: 'app-image-tool',
  standalone: true,
  imports: [DraggableToolComponent],
  templateUrl: './image-tool.component.html',
  styleUrl: './image-tool.component.scss'
})
export class ImageToolComponent implements ImageTool {
  readonly es = inject(EditorService);
  
  id!: string;
  type: string = "image";

  data!: ImageData;
  config!: ImageConfig;

  tunePanel = new Switch(true);
}
