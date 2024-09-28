import { Component, inject } from '@angular/core';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { LanguagePipe, MarkdownComponent } from 'ngx-markdown';
import { Switch } from '../../utils/switch';
import { FormsModule } from '@angular/forms';
import { EditorService } from '../../../core/services/editor.service';
import { Codeblock } from '../../../core/tools/codeblock/codeblock';

@Component({
  selector: 'app-codeblock-tool',
  standalone: true,
  imports: [
    DraggableToolComponent,
    MarkdownComponent,
    FormsModule,
    LanguagePipe,
  ],
  templateUrl: './codeblock-tool.component.html',
  styleUrl: './codeblock-tool.component.scss',
})
export class CodeblockToolComponent extends Codeblock {
  readonly es = inject(EditorService);
  editorPanel = new Switch(true);

  languages = ['javascript', 'typescript', 'css', 'html'];

  lang = 'javascript';
}
