import {
  ComponentRef,
  computed,
  Injectable,
  signal,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { IToolType } from '../tools/base/tool';
import { ParagraphToolComponent } from '../../shared/tools/paragraph-tool/paragraph-tool.component';
import { ImageToolComponent } from '../../shared/tools/image-tool/image-tool.component';
import { CodeblockToolComponent } from '../../shared/tools/codeblock-tool/codeblock-tool.component';
import { ToolType } from '../tools/tool-type';
import { Data } from '../tools/base/tool.data';
import { Config } from '../tools/base/tool.config';
import { v4 as uuid } from 'uuid';
import { Tools } from '../tools/tool-list';

type ToolComponent = ComponentRef<IToolType>;
type ToolOptions = {
  id?: string;
  data?: Data;
  config?: Config;
};

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private _blocks = signal<ToolComponent[]>([]);
  globalReadonly = signal(false);
  globalDraggable = signal(false);
  currentView = signal<ViewContainerRef | undefined>(undefined);
  blocks = computed(() => this._blocks());

  tools = Tools;

  create(toolType: ToolType, toolOptions: ToolOptions) {
    const newBlock = this.createBlock(toolType, toolOptions);

    if (newBlock) {
      this.pushBlock(newBlock);
    }
  }

  delete(index: number) {
    console.log(index);

    const removedBlock = this.removeBlock(index);

    if (removedBlock) {
      this.destroyBlock(removedBlock);
    }
  }

  move(fromIndex: number, toIndex: number) {
    if (fromIndex === toIndex || !this.currentView()) {
      return;
    }

    console.log(fromIndex, toIndex);
    

    let currBlocks = this._blocks();
    this.currentView()!.move(this._blocks()[fromIndex].hostView, toIndex);

    const movedComponent = currBlocks.splice(fromIndex, 1)[0];
    currBlocks.splice(toIndex, 0, movedComponent);
    this._blocks.set(currBlocks);

  }

  toggleReadOnly() {
    this.globalReadonly.set(!this.globalReadonly());
  }

  toggleDraggable() {
    this.globalDraggable.set(!this.globalDraggable());
  }

  clearBlocks() {
    this._blocks.set([]);
  }

  private createBlock(toolType: ToolType, { id, data, config }: ToolOptions) {
    if (!this.currentView()) {
      return;
    }

    const tool = this.toolFactory(toolType);

    if (!tool) {
      return;
    }

    const blockComponent = this.currentView()!.createComponent(tool);

    if (id) {
      blockComponent.instance.id = id;
    } else {
      blockComponent.instance.id = this.genGUID();
    }

    if (data) {
      blockComponent.instance.data = data;
    }

    if (config) {
      blockComponent.instance.config = config;
    }

    return blockComponent;
  }

  private destroyBlock(blockRef: ToolComponent) {
    blockRef.destroy();
  }

  private pushBlock(newBlock: ToolComponent) {
    let currBlocks = this._blocks();

    currBlocks = [...currBlocks, newBlock];

    this._blocks.set(currBlocks);
  }

  private removeBlock(index: number) {
    let currBlocks = this._blocks();

    if (index < 0 || index >= currBlocks.length) {
      return;
    }

    const removedComponent = currBlocks.splice(index, 1)[0];

    this._blocks.set(currBlocks);

    return removedComponent;
  }

  private toolFactory(toolType: ToolType): Type<IToolType> | null {
    switch (toolType) {
      case ToolType.Paragraph:
        return ParagraphToolComponent;

      case ToolType.Image:
        return ImageToolComponent;

      case ToolType.Codeblock:
        return CodeblockToolComponent;

      default:
        return null;
    }
  }

  private genGUID() {
    return btoa(uuid().replace(/-/g, '').substring(0, 8)).slice(0, -1);
  }
}
