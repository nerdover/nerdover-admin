import { Component, inject } from '@angular/core';
import { Switch } from '../../../../core/utils/switch';
import { LessonService } from '../../../../core/services/lesson.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CreateCategoryPanelComponent } from '../../components/create-category-panel/create-category-panel.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, DatePipe, CreateCategoryPanelComponent, IconComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {
  ls = inject(LessonService);

  createPanel = new Switch();
}
