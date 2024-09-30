import { computed, inject, Injectable, signal } from '@angular/core';
import { IdentifiableWithTrace } from '../models/lesson';
import { ContentService, LessonMap } from './content.service';

@Injectable({
  providedIn: 'root',
})
export class ContentClientService {
  private readonly contentService = inject(ContentService);

  private lessonMaps = signal<LessonMap[] | undefined>(undefined);
  isLoaded = computed(() => !!this.lessonMaps);

  categories = computed(() =>
    this.lessonMaps()?.map<IdentifiableWithTrace>(
      ({ id, title, createdAt, updatedAt }) => ({
        id,
        title,
        createdAt,
        updatedAt,
      })
    )
  );

  getCategory = (categoryId: string) =>
    computed(() => this.categories()?.find((c) => c.id === categoryId));

  lessonsIn = (categoryId: string) =>
    computed(
      () => this.lessonMaps()?.find((c) => c.id === categoryId)?.lessons
    );

  getLessonById(categoryId: string, lessonId: string) {
    return this.contentService.getLessonById(categoryId, lessonId);
  }

  seriesIn = (categoryId: string) =>
    computed(() =>
      this.lessonMaps()
        ?.find((c) => c.id === categoryId)
        ?.series.map<IdentifiableWithTrace>(
          ({ id, title, createdAt, updatedAt }) => ({
            id,
            title,
            createdAt,
            updatedAt,
          })
        )
    );

  getSeries = (categoryId: string, seriesId: string) =>
    computed(() => this.seriesIn(categoryId)()?.find((s) => s.id === seriesId));

  seriesLessonIn = (categoryId: string, seriesId: string) =>
    computed(
      () =>
        this.lessonMaps()
          ?.find((c) => c.id === categoryId)
          ?.series?.find((s) => s.id === seriesId)?.seriesLessons
    );

  getSeriesLessonById(
    categoryId: string,
    seriesId: string,
    seriesLessonId: string
  ) {
    return this.contentService.getSeriesLessonById(
      categoryId,
      seriesId,
      seriesLessonId
    );
  }

  loadObject() {
    this.contentService.getMap().subscribe((maps) => {
      this.lessonMaps.set(maps);
    });
  }

  updateLessonContent(categoryId: string, lessonId: string, content: string) {
    return this.contentService.updateLessonContent(categoryId, lessonId, {
      id: lessonId,
      content,
    });
  }
}
