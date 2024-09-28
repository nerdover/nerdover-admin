export interface Data {}
export interface Config {}

export interface ITool<D extends Data, C extends Config> {
  id: string;
  type: string;
  data: D;
  config: C;
}