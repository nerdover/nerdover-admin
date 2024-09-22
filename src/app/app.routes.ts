import { Routes } from '@angular/router';
import { ManageLayoutComponent } from './features/manage/layouts/manage-layout/manage-layout.component';
import { CategoriesPageComponent } from './features/manage/pages/categories-page/categories-page.component';
import { LessonsPageComponent } from './features/manage/pages/lessons-page/lessons-page.component';
import { SeriesPageComponent } from './features/manage/pages/series-page/series-page.component';

export const routes: Routes = [
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
