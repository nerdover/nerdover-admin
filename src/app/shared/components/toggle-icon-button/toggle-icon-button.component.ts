import { Component, Input } from '@angular/core';

@Component({
  selector: 'ToggleIconButton',
  standalone: true,
  imports: [],
  templateUrl: './toggle-icon-button.component.html',
  styleUrl: './toggle-icon-button.component.scss'
})
export class ToggleIconButtonComponent {
  @Input() of: boolean = false;
  @Input() trueIcon = 'radio_button_checked'
  @Input() falseIcon = 'radio_button_unchecked'
}
