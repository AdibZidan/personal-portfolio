import { Routes } from '@angular/router';

import { lazyLoadPortfolioComponent, lazyLoadAboutComponent, lasyLoadTaskManager } from './lazy-load/lazyLoadComponent';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', loadChildren: lazyLoadPortfolioComponent, data: { animation: 'portfolio' } },
  { path: 'about-me', loadChildren: lazyLoadAboutComponent, data: { animation: 'about-me' } },
  { path: 'task-manager', loadChildren: lasyLoadTaskManager, data: { animation: 'task-manager' } }
];
