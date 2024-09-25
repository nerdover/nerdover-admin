import {
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Config, Data, ITool } from '../models/tool-data';
import { ParagraphToolComponent } from '../../shared/tools/paragraph-tool/paragraph-tool.component';
import { ImageToolComponent } from '../../shared/tools/image-tool/image-tool.component';
import { CodeblockToolComponent } from '../../shared/tools/codeblock-tool/codeblock-tool.component';
import { v4 as uuid } from 'uuid';

type toolOptions = {
  data?: Data;
  config?: Config;
};

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  tools = ['Paragraph', 'Image', 'Codeblock', 'Command Line'];
  toolIcons = ['text_fields', 'image', 'code', 'terminal'];

  create(
    vcr: ViewContainerRef,
    toolName: string,
    { data, config }: toolOptions
  ) {
    const tool = this.toolFactory(toolName.toLowerCase());

    if (!tool) {
      return;
    }

    const toolComponent = vcr.createComponent(tool);

    toolComponent.instance.id = this.genGUID();

    if (data) {
      toolComponent.instance.data = data;
    }

    if (config) {
      toolComponent.instance.config = config;
    }

    return toolComponent;
  }

  destroy(ref: ComponentRef<ITool<Data, Config>>) {
    ref.destroy();
  }

  private toolFactory(toolName: string): Type<ITool<Data, Config>> | null {
    switch (toolName) {
      case 'paragraph':
        return ParagraphToolComponent;

      case 'image':
        return ImageToolComponent;

      // case 'codeblock':
      //   return CodeblockToolComponent;

      default:
        return null;
    }
  }

  genGUID() {
    return btoa(uuid().replace(/-/g, '').substring(0,8)).slice(0,-1);
  }
}
