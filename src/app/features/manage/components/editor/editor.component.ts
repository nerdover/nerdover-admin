import {
  AfterViewInit,
  Component,
  ComponentRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { EditorService } from '../../../../core/services/editor.service';
import { ToolType } from '../../../../core/tools/tool-type';
import { IToolType } from '../../../../core/tools/base/tool';
import { Data } from '../../../../core/tools/base/tool.data';
import { Config } from '../../../../core/tools/base/tool.config';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'Editor',
  standalone: true,
  imports: [CdkDropList, NgClass],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly editorService = inject(EditorService);
  subscription!: Subscription;
  isFirstSubscribe = true;

  @Input({ required: true }) data!: string;
  @Output() save = new EventEmitter<string>();

  // data =
  //   '[{"id":"ZWNlZjA1ODA","type":"Paragraph","data":{"text":"123"},"config":{"katex":true}},{"id":"MzM2NWYxYmE","type":"Paragraph","data":{"text":"dede"},"config":{"katex":true}},{"id":"ZjFiZjFjZWY","type":"Paragraph","data":{"text":"etgtg"},"config":{"katex":true}},{"id":"MDIzODI0ZDY","type":"Codeblock","data":{"code":"Hello\\nABC"},"config":{"lineNumbers":true}}]';

  container = viewChild('container', { read: ViewContainerRef });

  ngOnInit(): void {
    this.subscription = this.editorService.data$.subscribe((data) => {
      if (this.isFirstSubscribe) {
        this.isFirstSubscribe = false;
      } else {
        this.save.emit(data);
      }
    });
  }

  ngAfterViewInit(): void {
    this.editorService.currentView.set(this.container());

    const contents = JSON.parse(this.data) as {
      id: string;
      data: Data;
      config: Config;
      type: ToolType;
    }[];

    for (const content of contents) {
      this.add(content.type, content.id, content.data, content.config);
    }
  }

  ngOnDestroy(): void {
    this.editorService.currentView.set(undefined);
    this.editorService.clearBlocks();
    this.subscription?.unsubscribe();
  }

  add(tool: ToolType, id?: string, data?: Data, config?: Config): void {
    if (!this.container()) {
      return;
    }

    this.editorService.create(tool, { id, data, config });
  }

  drop(event: CdkDragDrop<ComponentRef<IToolType>>) {
    if (event.currentIndex === event.previousIndex || !this.container()) {
      return;
    }

    this.editorService.move(event.previousIndex, event.currentIndex);
  }
}
