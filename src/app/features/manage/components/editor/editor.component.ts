import {
  AfterViewInit,
  Component,
  ComponentRef,
  inject,
  OnDestroy,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { EditorService } from '../../../../core/services/editor.service';
import { ToolType } from '../../../../core/tools/tool-type';
import { IToolType } from '../../../../core/tools/base/tool';
import { DataService } from '../../../../core/services/data.service';
import { Data } from '../../../../core/tools/base/tool.data';
import { Config } from '../../../../core/tools/base/tool.config';
import { NgClass } from '@angular/common';

@Component({
  selector: 'Editor',
  standalone: true,
  imports: [CdkDropList, NgClass],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements AfterViewInit, OnDestroy {
  private readonly ds = inject(DataService);
  readonly es = inject(EditorService);

  data =
    '[{"id":"ZWNlZjA1ODA","type":"Paragraph","data":{"text":"123"},"config":{"katex":true}},{"id":"MzM2NWYxYmE","type":"Paragraph","data":{"text":"dede"},"config":{"katex":true}},{"id":"ZjFiZjFjZWY","type":"Paragraph","data":{"text":"etgtg"},"config":{"katex":true}},{"id":"MDIzODI0ZDY","type":"Codeblock","data":{"code":"Hello\\nABC"},"config":{"lineNumbers":true}}]';

  container = viewChild('container', { read: ViewContainerRef });

  ngAfterViewInit(): void {
    this.es.currentView.set(this.container());

    const a = JSON.parse(this.data) as {
      id: string;
      data: Data;
      config: Config;
      type: ToolType;
    }[];

    console.log(a);

    for (const d of a) {
      this.add(d.type, d.id, d.data, d.config);
    }
  }

  ngOnDestroy(): void {
    this.es.currentView.set(undefined);
    this.es.clearBlocks();
  }

  add(tool: ToolType, id?: string, data?: Data, config?: Config): void {
    if (!this.container()) {
      return;
    }

    this.es.create(tool, { id, data, config });
  }

  drop(event: CdkDragDrop<ComponentRef<IToolType>>) {
    if (event.currentIndex === event.previousIndex || !this.container()) {
      return;
    }

    this.es.move(event.previousIndex, event.currentIndex);
  }
}
