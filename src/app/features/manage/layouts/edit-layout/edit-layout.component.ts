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
  readonly editorService = inject(EditorService);

  editSidePanel = new Switch();

  orderPanel = new Switch();

  remove(index: number) {
    if (index < 0 || index >= this.editorService.blocks().length) {
      return;
    }

    this.editorService.delete(index);
  }
}
