import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  ICategory,
  ICreateCategory,
  ILessonMap,
  IUpdateCategory,
} from '../models/category';
import {
  ICreateLesson,
  ILesson,
  ILessonMetadata,
  IUpdateLesson,
} from '../models/lesson';
import { LESSON_ENDPOINT, CATEGORY_ENDPOINT } from '../constants/endpoint';

@Injectable({
  providedIn: 'root',
})
export class LessonRepositoryService {
  private readonly http = inject(HttpClient);

  getLessonMap() {
    return this.http.get<ILessonMap[]>(`${CATEGORY_ENDPOINT}/utils/map`);
  }

  getAllCategories() {
    return this.http.get<ICategory[]>(CATEGORY_ENDPOINT);
  }

  getAllLessonsInCategory(categoryId: string) {
    return this.http.get<ILessonMetadata[]>(`${LESSON_ENDPOINT}/${categoryId}`);
  }

  getLesson(categoryId: string, lessonId: string) {
    return this.http.get<ILesson>(
      `${LESSON_ENDPOINT}/${categoryId}/${lessonId}`
    );
  }

  createCategories({ id, title, cover }: ICreateCategory) {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    if (cover) {
      formData.append('cover', cover);
    }
    return this.http.post<ICategory>(CATEGORY_ENDPOINT, formData);
  }

  createLesson(lesson: ICreateLesson) {
    return this.http.post<ILesson>(LESSON_ENDPOINT, lesson);
  }

  updateCategory(categoryId: string, { title, cover }: IUpdateCategory) {
    const formData = new FormData();
    formData.append('title', title);
    if (cover) {
      formData.append('cover', cover);
    }
    return this.http.patch<ICategory>(
      `${CATEGORY_ENDPOINT}/${categoryId}`,
      formData
    );
  }

  updateLesson(categoryId: string, lessonId: string, lesson: IUpdateLesson) {
    return this.http.patch<ILesson>(
      `${LESSON_ENDPOINT}/${categoryId}/${lessonId}`,
      lesson
    );
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(`${CATEGORY_ENDPOINT}/${categoryId}`);
  }

  deleteLesson(categoryId: string, lessonId: string) {
    return this.http.delete(`${LESSON_ENDPOINT}/${categoryId}/${lessonId}`);
  }
}
