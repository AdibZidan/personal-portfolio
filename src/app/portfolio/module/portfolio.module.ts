import { NgModule } from '@angular/core';

import { PortfolioComponent } from '../portfolio.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [CommonModule]
})

export class PortfolioModule { }
