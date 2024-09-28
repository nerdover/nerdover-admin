import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorService } from '../../../../core/services/editor.service';
import { Switch } from '../../../../shared/utils/switch';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './edit-layout.component.html',
  styleUrl: './edit-layout.component.scss',
})
export class EditLayoutComponent {
  readonly es = inject(EditorService);
  // private readonly ds

  json = '';

  editSidePanel = new Switch();

  orderPanel = new Switch();

  remove(index: number) {
    if (index < 0 || index >= this.es.blocks().length) {
      return;
    }

    this.es.delete(index);
  }

  getdt() {
    this.json = JSON.stringify(
      this.es.blocks().map((b) => ({
        id: b.instance.id,
        type: b.instance.type,
        data: b.instance.data,
        config: b.instance.config,
      }))
    );
  }

  read() {
    this.es.toggleReadOnly();
  }

  drag() {
    this.es.toggleDraggable();
  }


}
