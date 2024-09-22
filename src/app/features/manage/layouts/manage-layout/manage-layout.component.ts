import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manage-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './manage-layout.component.html',
  styleUrl: './manage-layout.component.scss',
})
export class ManageLayoutComponent {}
