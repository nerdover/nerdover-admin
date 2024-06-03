import { Routes } from '@angular/router';
import { ManageLayoutComponent } from './features/manage/layouts/manage-layout/manage-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/manage',
        pathMatch: 'full'
      },
      {
        path: 'manage',
        component: ManageLayoutComponent,
        loadChildren: () =>
          import('./features/manage/manage-routing.module').then(
            (m) => m.ManageRoutingModule
          ),
      },
    ],
  },
];
