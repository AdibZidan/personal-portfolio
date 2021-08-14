import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [
    CommonModule,
    FooterComponent
  ]
})
export class SharedModule { }
