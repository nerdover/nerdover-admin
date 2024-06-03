import {
  Component,
  OnInit,
  computed,
  inject,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory, IUpdateCategory } from '../../../../core/models/category';
import { LessonService } from '../../../../core/services/lesson.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'UpdateCategoryPanel',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './update-category-panel.component.html',
  styleUrl: './update-category-panel.component.scss',
})
export class UpdateCategoryPanelComponent implements OnInit {
  ls = inject(LessonService);

  updateCategory: IUpdateCategory = { title: '' };

  coverFile = signal<File | undefined>(undefined);
  coverSrc = computed(() =>
    this.coverFile() ? URL.createObjectURL(this.coverFile()!) : undefined
  );

  updated = output<ICategory>();
  close = output();

  isImageDeleted = false;

  ngOnInit(): void {
    this.updateCategory.title = this.ls.currentLessonMap()!.title;

    // this.updateCategory.
  }

  update() {
    if (!this.validateCategory()) {
      return;
    }

    this.ls
      .updateCategory(this.ls.currentLessonMap()!.id, this.updateCategory, {
        cover: this.coverFile(),
      })
      .subscribe((updatedCategory) => {
        this.ls.loadLessonMap();
        this.updated.emit(updatedCategory);
        this.close.emit();
      });
  }

  cancel() {
    this.close.emit();
  }

  validateCategory() {
    return this.updateCategory.title;
  }

  inputCoverImage(e: Event) {
    const el = e.target as HTMLInputElement;
    if (!el.files) {
      return;
    }
    this.coverFile.set(el.files[0]);
  }

  clearCoverFile() {
    if (!this.isImageDeleted) {
      this.isImageDeleted = true;
    }
    this.coverFile.set(undefined);
  }
}
