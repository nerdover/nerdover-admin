import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorService } from '../../../../core/services/editor.service';
import { ToolService } from '../../../../core/services/tool.service';

@Component({
  selector: 'app-edit-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './edit-layout.component.html',
  styleUrl: './edit-layout.component.scss'
})
export class EditLayoutComponent {
  readonly es = inject(EditorService);
  private readonly ts = inject(ToolService);
  // private readonly ds 

  remove(index: number) {
    if (index < 0 || index >= this.es.blocks().length) {
      return;
    }

    this.ts.destroy(this.es.blocks()[index]);
    this.es.removeBlock(index);
  }
}
