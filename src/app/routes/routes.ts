import { Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component';

import { AboutComponent } from './../portfolio/about/about.component';

import { MainComponent } from '../task-manager/main/main.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'task-manager', component: MainComponent }
];
