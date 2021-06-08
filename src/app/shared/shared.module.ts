import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/inputs/input/input.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    FooterComponent,
    InputComponent,
    ValidationMessagesComponent,
  ],
  exports: [
    CommonModule,
    FooterComponent,
    InputComponent,
    ValidationMessagesComponent
  ]
})
export class SharedModule { }
