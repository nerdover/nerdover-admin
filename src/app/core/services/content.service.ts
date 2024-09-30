import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IdentifiableWithTrace, Lesson, SeriesLesson } from '../models/lesson';

export interface LessonMap extends IdentifiableWithTrace {
  lessons: IdentifiableWithTrace[];
  series: SeriesMap[];
}

interface SeriesMap extends IdentifiableWithTrace {
  seriesLessons: IdentifiableWithTrace[];
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly http = inject(HttpClient);

  public getMap() {
    return this.http.get<LessonMap[]>('/api/Categories/utils/map');
  }

  public getCategories() {
    return this.http.get<IdentifiableWithTrace[]>('/api/Categories');
  }

  public createCategory({ id, title }: ObjectDto) {
    return this.http.post<IdentifiableWithTrace>('/api/Categories', {
      id,
      title,
    });
  }

  public updateCategory(categoryId: string, { id, title }: ObjectDto) {
    return this.http.patch(`/api/Categories/${categoryId}`, { id, title });
  }

  public deleteCategory(categoryId: string) {
    return this.http.delete(`/api/Categories/${categoryId}`);
  }

  public getLessons(categoryId: string) {
    return this.http.get<IdentifiableWithTrace[]>(`/api/Lessons/${categoryId}`);
  }

  public getLessonById(categoryId: string, lessonId: string) {
    return this.http.get<Lesson>(`/api/Lessons/${categoryId}/${lessonId}`);
  }

  public createLesson({ id, title, categoryId }: ObjectDto) {
    return this.http.post(`/api/Lessons`, { id, title, categoryId });
  }

  public updateLesson(
    categoryId: string,
    lessonId: string,
    { id, title }: ObjectDto
  ) {
    return this.http.patch(`/api/Lessons/${categoryId}/${lessonId}`, {
      id,
      title,
      categoryId,
    });
  }

  public updateLessonContent(
    categoryId: string,
    lessonId: string,
    { id, content }: ObjectDto
  ) {
    return this.http.patch(`/api/Lessons/${categoryId}/${lessonId}/content`, {
      id,
      content,
      categoryId,
    });
  }

  public deleteLesson(categoryId: string, lessonId: string) {
    return this.http.delete(`/api/Lessons/${categoryId}/${lessonId}`);
  }

  public getSeries(categoryId: string) {
    return this.http.get<IdentifiableWithTrace[]>(`/api/Series/${categoryId}`);
  }

  public createSeries({ id, title, categoryId }: ObjectDto) {
    return this.http.post(`/api/Series`, { id, title, categoryId });
  }

  public updateSeries(
    categoryId: string,
    seriesId: string,
    { id, title }: ObjectDto
  ) {
    return this.http.patch(`/api/Series/${categoryId}/${seriesId}`, {
      id,
      title,
      categoryId,
    });
  }

  public deleteSeries(categoryId: string, seriesId: string) {
    return this.http.delete(`/api/Series/${categoryId}/${seriesId}`);
  }

  public getSeriesLessons(categoryId: string, seriesId: string) {
    return this.http.get<IdentifiableWithTrace[]>(
      `/api/SeriesLessons/${categoryId}/${seriesId}`
    );
  }

  public getSeriesLessonById(
    categoryId: string,
    seriesId: string,
    seriesLessonId: string
  ) {
    return this.http.get<SeriesLesson>(
      `/api/SeriesLessons/${categoryId}/${seriesId}/${seriesLessonId}`
    );
  }

  public createSeriesLesson({ id, title, categoryId, seriesId }: ObjectDto) {
    return this.http.post(`/api/SeriesLessons/${categoryId}/${seriesId}`, {
      id,
      title,
      categoryId,
      seriesId,
    });
  }

  public updateSeriesLesson(
    categoryId: string,
    seriesId: string,
    seriesLessonId: string,
    { id, title }: ObjectDto
  ) {
    return this.http.patch(
      `/api/SeriesLessons/${categoryId}/${seriesId}/${seriesLessonId}`,
      { id, title, categoryId, seriesId }
    );
  }

  public updateSeriesLessonContent(
    categoryId: string,
    seriesId: string,
    seriesLessonId: string,
    { id, content }: ObjectDto
  ) {
    return this.http.patch(
      `/api/SeriesLessons/${categoryId}/${seriesId}/${seriesLessonId}/content`,
      {
        id,
        content,
        categoryId,
        seriesId,
      }
    );
  }

  public deleteSeriesLesson(
    categoryId: string,
    seriesId: string,
    seriesLessonId: string
  ) {
    return this.http.delete(
      `/api/SeriesLessons/${categoryId}/${seriesId}/${seriesLessonId}`
    );
  }
}

interface ObjectDto {
  id: string;
  title?: string;
  content?: string;
  categoryId?: string;
  lessonId?: string;
  seriesId?: string;
  lessonSeriesId?: string;
}
