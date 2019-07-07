import { Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MainComponent } from '../task-manager/main/main.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'task-manager', component: MainComponent }
];
