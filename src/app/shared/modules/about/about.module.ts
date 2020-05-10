import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

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
