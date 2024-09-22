import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'FileButton',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './file-button.component.html',
  styleUrl: './file-button.component.scss',
})
export class FileButtonComponent {
  @Input() to: string[] = [];
  @Input() icon = 'folder';
  @Input() label = 'Folder';
  @Input() entireLinkable = false;
}
