import { Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio/portfolio.component';
import { MainComponent } from '../todo/main/main.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'todo', component: MainComponent }
];
