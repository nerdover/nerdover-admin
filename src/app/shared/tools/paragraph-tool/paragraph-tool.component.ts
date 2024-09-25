import { Component } from '@angular/core';
import {
  ParagraphConfig,
  ParagraphData,
  ParagraphTool,
} from '../../../core/models/paragraph-tool';
import { Switch } from '../../utils/switch';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { FormsModule } from '@angular/forms';
import { ToggleIconButtonComponent } from '../../components/toggle-icon-button/toggle-icon-button.component';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'ParagraphTool',
  standalone: true,
  imports: [
    DraggableToolComponent,
    FormsModule,
    ToggleIconButtonComponent,
    MarkdownComponent,
  ],
  templateUrl: './paragraph-tool.component.html',
  styleUrl: './paragraph-tool.component.scss',
})
export class ParagraphToolComponent implements ParagraphTool {
  id!: string;

  data: ParagraphData = {
    text: '',
  };

  config: ParagraphConfig = {
    katex: true,
  };

  editorPanel = new Switch(true);
}
