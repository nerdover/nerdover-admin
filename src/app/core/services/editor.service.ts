import { ComponentRef, computed, Injectable, signal } from '@angular/core';
import { ITool, Config, Data } from '../models/tool-data';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private _blocks = signal<ComponentRef<ITool<Data, Config>>[]>([]);
  blocks = computed(() => this._blocks());

  pushBlock(newBlock: ComponentRef<ITool<Data, Config>>) {
    let currBlocks = this._blocks();

    currBlocks = [...currBlocks, newBlock];

    this._blocks.set(currBlocks);
  }

  removeBlock(index: number) {
    let currBlocks = this._blocks();

    if (index < 0 || index >= currBlocks.length) {
      return;
    }

    currBlocks = currBlocks.filter((_,i) => i !== index);

    this._blocks.set(currBlocks);
  }

  moveBlock(previousIndex: number, currentIndex: number) {
    let currBlocks = this._blocks();

    const movedComponent = currBlocks.splice(previousIndex, 1)[0];
    currBlocks.splice(currentIndex, 0, movedComponent);

    this._blocks.set(currBlocks);
  }
}
