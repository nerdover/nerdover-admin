import { Routes } from '@angular/router';
import { ManageLayoutComponent } from './features/manage/layouts/manage-layout/manage-layout.component';
import { CategoriesPageComponent } from './features/manage/pages/categories-page/categories-page.component';
import { LessonsPageComponent } from './features/manage/pages/lessons-page/lessons-page.component';
import { SeriesPageComponent } from './features/manage/pages/series-page/series-page.component';
import { EditLessonPageComponent } from './features/manage/pages/edit-lesson-page/edit-lesson-page.component';
import { EditSeriesLessonPageComponent } from './features/manage/pages/edit-series-lesson-page/edit-series-lesson-page.component';
import { EditLayoutComponent } from './features/manage/layouts/edit-layout/edit-layout.component';

export const routes: Routes = [
  {
    path: 'edit',
    component: EditLayoutComponent,
    children: [
      {
        path: 'lesson/:categoryId/:lessonId',
        component: EditLessonPageComponent,
      },
      {
        path: 'series-lesson/:categoryId/:seriesId/:seriesLessonId',
        component: EditSeriesLessonPageComponent,
      },
    ],
  },
  {
    path: '',
    component: ManageLayoutComponent,
    children: [
      {
        path: '',
        component: CategoriesPageComponent,
      },
      {
        path: ':categoryId',
        component: LessonsPageComponent,
      },
      {
        path: ':categoryId/:seriesId',
        component: SeriesPageComponent,
      },
    ],
  },
];
