import { NgModule } from '@angular/core';
import { PortfolioComponent } from './../portfolio.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortfolioRoutingModule { }
