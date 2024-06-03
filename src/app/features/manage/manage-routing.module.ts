import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { EditLessonComponent } from './pages/edit-lesson/edit-lesson.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: ':categoryId/lessons',
    component: LessonListComponent,
  },
  {
    path: ':categoryId/lessons/:lessonId',
    component: EditLessonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
