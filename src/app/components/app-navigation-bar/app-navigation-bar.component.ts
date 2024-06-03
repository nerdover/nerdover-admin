import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MAIN_MENU } from '../../core/utils/menu';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'AppNavigationBar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './app-navigation-bar.component.html',
  styleUrl: './app-navigation-bar.component.scss'
})
export class AppNavigationBarComponent {
  menu = MAIN_MENU
}
