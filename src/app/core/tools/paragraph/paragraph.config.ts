import { Config } from '../base/tool.config';

export interface ParagraphConfig extends Config {
  katex: boolean;
}

export const DEFAULT_PARAGRAPH_CONFIG: ParagraphConfig = {
  katex: true,
};
