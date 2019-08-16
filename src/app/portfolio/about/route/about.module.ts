import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../about.component';
import { FooterComponent } from '../../footer/footer.component';

@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})

export class AboutModule { }
