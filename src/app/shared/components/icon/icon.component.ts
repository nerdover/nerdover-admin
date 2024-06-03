import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

type IconSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'Icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  name = input('home');
  fill = input(false);
  size = input<IconSize>('medium');
}
