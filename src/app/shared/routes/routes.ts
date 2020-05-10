import { Routes } from '@angular/router';

import {
  lazyLoadPortfolioComponent,
  lazyLoadAboutComponent,
  lazyLoadTaskManager
} from './lazy-load/lazy-load-components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadChildren: lazyLoadPortfolioComponent,
    data: { animation: 'portfolio' }
  },
  {
    path: 'about-me',
    loadChildren: lazyLoadAboutComponent,
    data: { animation: 'about-me' }
  },
  {
    path: 'task-manager',
    loadChildren: lazyLoadTaskManager,
    data: { animation: 'task-manager' }
  },
  {
    path: '**',
    loadChildren: lazyLoadPortfolioComponent
  }
];
