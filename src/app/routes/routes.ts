import { Routes } from '@angular/router';

import { lazyLoadPortfolioComponent, lazyLoadAboutComponent } from './lazy-load/lazyLoadComponent';

import { MainComponent } from './../task-manager/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', loadChildren: lazyLoadPortfolioComponent, data: { animation: 'portfolio' } },
  { path: 'about-me', loadChildren: lazyLoadAboutComponent, data: { animation: 'about-me' } },
  { path: 'task-manager', component: MainComponent, data: { animation: 'task-manager' } }
];
