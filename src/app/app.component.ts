import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './layouts/navigation-bar/navigation-bar.component';
import { ContentClientService } from './core/services/content-client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nerdover-admin';
  private readonly contentClientService = inject(ContentClientService);

  ngOnInit(): void {
    this.contentClientService.loadObject();
  }
}
