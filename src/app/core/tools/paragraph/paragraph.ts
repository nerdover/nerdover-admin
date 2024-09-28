import { ITool } from '../base/tool';
import { ToolType } from '../tool-type';
import { DEFAULT_PARAGRAPH_CONFIG, ParagraphConfig } from './paragraph.config';
import { ParagraphData } from './paragraph.data';

export class Paragraph implements ITool<ParagraphData, ParagraphConfig> {
  id = '';
  readonly type = ToolType.Paragraph;

  data: ParagraphData = {
    text: '',
  };

  config = DEFAULT_PARAGRAPH_CONFIG;
}
