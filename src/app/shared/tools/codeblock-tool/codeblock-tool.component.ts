import { Component, ElementRef, viewChild } from '@angular/core';
import { CodeblockConfig, CodeblockData, CodeblockTool } from '../../../core/models/codeblock-tool';
import loader from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';
import { Switch } from '../../utils/switch';
import { DraggableToolComponent } from '../../components/draggable-tool/draggable-tool.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-codeblock-tool',
  standalone: true,
  imports: [DraggableToolComponent, FormsModule],
  templateUrl: './codeblock-tool.component.html',
  styleUrl: './codeblock-tool.component.scss'
})
export class CodeblockToolComponent implements CodeblockTool {
  id!: string;
  data: CodeblockData = {
    text: ``,
  };
  config!: CodeblockConfig;

  codeElRef = viewChild<ElementRef<HTMLDivElement>>('code');
  monacoEditor!: monaco.editor.IStandaloneCodeEditor;
  selectedLanguage = 'html';

  editorPanel = new Switch(true);

  ngAfterViewInit(): void {
    loader.init().then((monaco) => {
      this.monacoEditor = monaco.editor.create(this.codeElRef()!.nativeElement, {
        value: '// some comment',
        language: this.selectedLanguage,
        lineHeight: 20,
        theme: 'vs',
        minimap: {enabled: false},
      });
    });
  }

  changeLanguage(l: string) {
    const a = this.monacoEditor.getModel();
    monaco.editor.setModelLanguage(a!, l)
  }
}
