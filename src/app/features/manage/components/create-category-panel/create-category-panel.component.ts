import { Component, computed, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICreateCategory, ICategory } from '../../../../core/models/category';
import { LessonService } from '../../../../core/services/lesson.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'CreateCategoryPanel',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './create-category-panel.component.html',
  styleUrl: './create-category-panel.component.scss',
})
export class CreateCategoryPanelComponent {
  private readonly ls = inject(LessonService);

  category: ICreateCategory = { id: '', title: '' };
  coverFile = signal<File | undefined>(undefined);
  coverSrc = computed(() =>
    this.coverFile() ? URL.createObjectURL(this.coverFile()!) : undefined
  );

  created = output<ICategory>();
  close = output();

  create() {
    if (!this.validateCategory()) {
      return;
    }
    this.ls
      .createCategory(this.category, { cover: this.coverFile() })
      .subscribe((createdCategory) => {
        this.created.emit(createdCategory);
        this.close.emit();
      });
  }

  cancel() {
    this.close.emit();
  }

  validateCategory() {
    return this.category.id && this.category.title;
  }

  inputCoverImage(e: Event) {
    const el = e.target as HTMLInputElement;
    if (!el.files) {
      return;
    }
    this.coverFile.set(el.files[0]);
  }

  clearCoverFile() {
    this.coverFile.set(undefined);
  }
}
