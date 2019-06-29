import { Routes } from '@angular/router';

import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MainComponent } from '../todo/main/main.component';
import { EditComponent } from '../todo/edit/edit.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'todo', component: MainComponent },
  { path: 'edit-todo/:id', component: EditComponent }
];
