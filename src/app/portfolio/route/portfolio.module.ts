import { NgModule } from '@angular/core';
import { PortfolioComponent } from './../portfolio.component';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})

export class PortfolioModule { }
