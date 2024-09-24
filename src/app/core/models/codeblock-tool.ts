import { Data, Config, ITool } from './tool-data';

class CodeblockData implements Data {
    text: string = ''
}

class CodeblockConfig implements Config {}

type CodeblockTool = ITool<CodeblockData, CodeblockConfig>;

export type { CodeblockData, CodeblockConfig, CodeblockTool };
