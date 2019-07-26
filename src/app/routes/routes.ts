import { Routes } from '@angular/router';

import { lazyLoadPortfolioComponent } from './lazy-load/lazyLoadComponent';

import { AboutComponent } from './../portfolio/about/about.component';

import { MainComponent } from './../task-manager/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', loadChildren: lazyLoadPortfolioComponent, data: { animation: 'portfolio' } },
  { path: 'about-me', component: AboutComponent, data: { animation: 'about-me' } },
  { path: 'task-manager', component: MainComponent, data: { animation: 'task-manager' } }
];
