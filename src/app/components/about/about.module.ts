import { NgModule } from '@angular/core';
import { AboutComponent } from '@components/about/about.component';
import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
