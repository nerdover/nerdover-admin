import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';

@Component({
  selector: 'DeleteCategoryPanel',
  standalone: true,
  imports: [],
  templateUrl: './delete-category-panel.component.html',
  styleUrl: './delete-category-panel.component.scss',
})
export class DeleteCategoryPanelComponent {
  private readonly ls = inject(LessonService);
  private readonly router = inject(Router);

  categoryId = input<string>('');
  close = output();

  cancel() {
    this.close.emit();
  }

  delete() {
    this.ls.deleteCategory(this.categoryId()).subscribe(() => {
      this.ls.loadLessonMap();
      this.router.navigate(['/manage']);
    });
  }
}
