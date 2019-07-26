import { NgModule } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent
  ],
  imports: [CommonModule]
})

export class PortfolioModule { }
