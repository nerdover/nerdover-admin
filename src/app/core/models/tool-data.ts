export interface Data {}
export interface Config {}

export interface ITool<D extends Data, C extends Config> {
  id: string;
  data: D;
  config: C;
}