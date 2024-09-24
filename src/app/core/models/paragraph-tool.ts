import { Data, Config, ITool } from './tool-data';

class ParagraphData implements Data {
  text = '';
}

class ParagraphConfig implements Config {
  katex = true;
}

type ParagraphTool = ITool<ParagraphData, ParagraphConfig>;

export type { ParagraphData, ParagraphConfig, ParagraphTool };
