import { Data, Config, ITool } from './tool-data';

class ImageData implements Data {}

class ImageConfig implements Config {}

type ImageTool = ITool<ImageData, ImageConfig>;

export type { ImageData, ImageConfig, ImageTool };
