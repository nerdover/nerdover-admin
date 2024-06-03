import { Component } from '@angular/core';
import { AppNavigationBarComponent } from '../../components/app-navigation-bar/app-navigation-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'AppLayout',
  standalone: true,
  imports: [AppNavigationBarComponent, RouterOutlet],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
