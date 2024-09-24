import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorService } from '../../../../core/services/editor.service';

@Component({
  selector: 'app-edit-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './edit-layout.component.html',
  styleUrl: './edit-layout.component.scss'
})
export class EditLayoutComponent {
  readonly es = inject(EditorService);
}
