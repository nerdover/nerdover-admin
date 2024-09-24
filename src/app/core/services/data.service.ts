import { Injectable } from '@angular/core';
import { Config, Data } from '../models/tool-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bs: { tool: string; data: Data; config: Config }[] = [
    {
      tool: 'md',
      data: {
        md: '# Hello',
      },
      config: {},
    },
    {
      tool: 'text',
      data: {
        text: 'Hi',
      },
      config: {},
    },
    {
      tool: 'md',
      data: {
        md: '$A+B$',
      },
      config: {
        enabledKatex: true,
      },
    },
  ];

  push(newData: { tool: string; data: Data; config: Config }) {
    this.bs.push(newData);
  }

  remove(index: number) {
    this.bs = this.bs.filter((_, i) => i !== index);
  }

  move(previousIndex: number, currentIndex: number) {
    const movedData = this.bs.splice(previousIndex, 1)[0];
    this.bs.splice(currentIndex, 0, movedData);
  }
}
