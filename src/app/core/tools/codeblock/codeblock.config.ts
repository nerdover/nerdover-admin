import { Config } from '../base/tool.config';

export interface CodeblockConfig extends Config {
  lineNumbers: boolean;
}

export const DEFAULT_CODEBLOCK_CONFIG: CodeblockConfig = {
  lineNumbers: true,
};
