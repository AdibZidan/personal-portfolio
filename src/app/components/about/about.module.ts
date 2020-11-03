import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from '@components/about/about.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { AboutRoutingModule } from './about-routing.module';

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
