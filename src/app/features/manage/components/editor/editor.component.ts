import { Component, ComponentRef, inject, viewChild, ViewContainerRef } from '@angular/core';
import { Config, Data, ITool } from '../../../../core/models/tool-data';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ToolService } from '../../../../core/services/tool.service';
import { EditorService } from '../../../../core/services/editor.service';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'Editor',
  standalone: true,
  imports: [CdkDropList],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  readonly ts = inject(ToolService);
  private readonly ds = inject(DataService);
  readonly es = inject(EditorService);

  // data = '';

  container = viewChild('container', { read: ViewContainerRef });

  add(tool: string) {
    if (!this.container()) {
      return;
    }

    const createdTool = this.ts.create(this.container()!, tool, {});

    if (createdTool) {
      this.es.pushBlock(createdTool);
    }
  }

  drop(event: CdkDragDrop<ComponentRef<ITool<Data, Config>>>) {
    if (event.currentIndex === event.previousIndex || !this.container()) {
      return;
    }

    this.container()!.move(
      this.es.blocks()[event.previousIndex].hostView,
      event.currentIndex
    );

    this.es.moveBlock(event.previousIndex, event.currentIndex);
  }

}
