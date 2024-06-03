import { Injectable, computed, inject, signal } from '@angular/core';
import { LessonRepositoryService } from '../repositories/lesson.repository.service';
import {
  ICategory,
  ICreateCategory,
  ILessonMap,
  IUpdateCategory,
} from '../models/category';
import { ICreateLesson, IUpdateLesson } from '../models/lesson';

export type CreateCategoryoptions = {
  cover?: File;
};

export type UpdateCategoryOptions = {
  cover?: File;
};

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private readonly lsr = inject(LessonRepositoryService);

  lessonMaps = signal<ILessonMap[] | null | undefined>(undefined);
  currentCategoryId = signal<string | undefined>(undefined);
  currentLessonId = signal<string | undefined>(undefined);

  categories = computed(() =>
    this.lessonMaps()?.map<ICategory>(
      ({ id, title, createdAt, updatedAt }) => ({
        id,
        title,
        createdAt,
        updatedAt,
      })
    )
  );

  currentLessonMap = computed(() =>
    this.lessonMaps()?.find(
      (lessonMap) => lessonMap.id === this.currentCategoryId()
    )
  );

  loadLessonMap() {
    this.lsr.getLessonMap().subscribe((lm) => this.lessonMaps.set(lm));
  }

  addToLessonMap(lessonMap: ILessonMap) {
    if (this.lessonMaps() === undefined) {
      return;
    }

    if (this.lessonMaps() === null) {
      this.lessonMaps.set([lessonMap]);
      return;
    }

    this.lessonMaps.set([...this.lessonMaps()!, lessonMap]);
  }

  getCategories() {
    return this.lsr.getAllCategories();
  }

  getCategory(categoryId: string) {
    return this.lessonMaps()?.find((category) => category.id === categoryId);
  }

  getAllLessonsInCategory(categoryId: string) {
    return this.lsr.getAllLessonsInCategory(categoryId);
  }

  getLesson(categoryId: string, lessonId: string) {
    return this.lsr.getLesson(categoryId, lessonId);
  }

  createCategory(
    { id, title }: ICreateCategory,
    options?: CreateCategoryoptions
  ) {
    return this.lsr.createCategories({ id, title, cover: options?.cover });
  }

  createLesson(lesson: ICreateLesson) {
    return this.lsr.createLesson(lesson);
  }

  updateCategory(
    categoryId: string,
    { title }: IUpdateCategory,
    options?: UpdateCategoryOptions
  ) {
    return this.lsr.updateCategory(categoryId, {
      title,
      cover: options?.cover,
    });
  }

  updateLesson(categoryId: string, lessonId: string, lesson: IUpdateLesson) {
    return this.lsr.updateLesson(categoryId, lessonId, lesson);
  }

  deleteCategory(categoryId: string) {
    return this.lsr.deleteCategory(categoryId);
  }

  deleteLesson(categoryId: string, lessonId: string) {
    return this.lsr.deleteLesson(categoryId, lessonId);
  }
}
