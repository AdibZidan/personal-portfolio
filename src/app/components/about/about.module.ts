import { NgModule } from '@angular/core';
import { AboutComponent } from '@components/about/about.component';
import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { OnScrollDirective } from './directives/on-scroll/on-scroll.directive';

@NgModule({
  declarations: [
    AboutComponent,
    OnScrollDirective
  ],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
