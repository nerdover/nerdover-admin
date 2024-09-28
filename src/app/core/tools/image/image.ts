import { ITool } from '../base/tool';
import { ToolType } from '../tool-type';
import { ImageConfig, DEFAULT_IMAGE_CONFIG } from './image.config';
import { ImageData } from './image.data';

export class Image implements ITool<ImageData, ImageConfig> {
  id = '';
  readonly type = ToolType.Image;

  data: ImageData = {
    src: '',
  };

  config = DEFAULT_IMAGE_CONFIG;
}
