import { ITool } from '../base/tool';
import { ToolType } from '../tool-type';
import { DEFAULT_CODEBLOCK_CONFIG, CodeblockConfig } from './codeblock.config';
import { CodeblockData } from './codeblock.data';

export class Codeblock implements ITool<CodeblockData, CodeblockConfig> {
  id = '';
  readonly type = ToolType.Codeblock;

  data: CodeblockData = {
    code: '',
  };

  config = DEFAULT_CODEBLOCK_CONFIG;
}
