import { Component, inject } from '@angular/core';
import { Switch } from '../../utils/switch';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';
import { EditorService } from '../../../core/services/editor.service';
import { Paragraph } from '../../../core/tools/paragraph/paragraph';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ParagraphTool',
  standalone: true,
  imports: [
    DraggableToolComponent,
    FormsModule,
    MarkdownComponent,
    NgClass
  ],
  templateUrl: './paragraph-tool.component.html',
  styleUrl: './paragraph-tool.component.scss',
})
export class ParagraphToolComponent extends Paragraph {
  readonly es = inject(EditorService);
  editorPanel = new Switch(true);
}
