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
    pathMatch: 'full',
    data: {
      tite: `Adib's Portfolio`
    }
  },
  {
    path: 'portfolio',
    loadChildren: lazyLoadPortfolioComponent,
    data: {
      animation: 'portfolio',
      title: `Adib's Portfolio`
    }
  },
  {
    path: 'about-me',
    loadChildren: lazyLoadAboutComponent,
    data: {
      animation: 'about-me',
      title: 'About Me'
    }
  },
  {
    path: 'task-manager',
    loadChildren: lazyLoadTaskManager,
    data: {
      animation: 'task-manager',
      title: 'Task Manager'
    }
  },
  {
    path: '**',
    loadChildren: lazyLoadPortfolioComponent
  }
];
