import { Config } from './tool.config';
import { Data } from './tool.data';

export interface ITool<D extends Data, C extends Config> {
  id: string;
  type: string;
  data: D;
  config: C;
}

export type IToolType = ITool<Data, Config>;